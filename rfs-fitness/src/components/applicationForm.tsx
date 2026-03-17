import { useState } from "react";
import '../styles/applicationForm.css'
import { NavLink } from "react-router-dom";
const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const TIME_SLOTS = [
  "6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM",
  "12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM",
  "6:00 PM","7:00 PM","8:00 PM",
];

const UNAVAILABLE = new Set(["6:00 AM","11:00 AM","2:00 PM","7:00 PM"]);

export default function ApplicationForm() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0,0,0,0);
    const t = new Date(); t.setHours(0,0,0,0);
    return d < t;
  };

  const isSelected = (day: number) =>
    selectedDate &&
    selectedDate.getDate() === day &&
    selectedDate.getMonth() === viewMonth &&
    selectedDate.getFullYear() === viewYear;

  const handleDateClick = (day: number) => {
    if (isPast(day)) return;
    setSelectedDate(new Date(viewYear, viewMonth, day));
    setSelectedTime(null);
  };

  const handleTimeClick = (slot: string) => {
    if (UNAVAILABLE.has(slot)) return;
    setSelectedTime(slot);
    setShowModal(true);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) e.phone = "Valid phone required";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    try{
    const res = await fetch('https://your-backend.up.railway.app/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name:form.name, email:form.email, contact:form.phone, timeSlot:selectedTime })  
    });

    if (!res.ok) throw new Error('Request failed');   // manual error check
    const data = await res.json();  
    console.log("success", data); 
        }
    catch(err){
      console.error("error",err);
    }
    setShowModal(false);
    setConfirmed(true);
  };

  const cells = Array.from({ length: firstDay + daysInMonth }, (_, i) =>
    i < firstDay ? null : i - firstDay + 1
  );

  return (
    <>
      

      {confirmed ? (
        <div className="confirmation">
            <div className="back-btn" style={{textAlign:"left", left:0}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
            </svg>
            </div>
          <div className="confirm-application-card">
            <div className="confirm-icon">✓</div>
            <div className="confirm-eyebrow">Booking Confirmed</div>
            <div className="confirm-title">
              You're all <em>set</em>,<br />{form.name.split(" ")[0]}
            </div>
            <div className="confirm-body">
              Your session has been successfully scheduled. Our fitness coach will be in touch with you shortly to prepare your personalised programme.
            </div>
            <div className="confirm-details">
              <div className="confirm-detail-row">
                <span className="confirm-detail-key">Date</span>
                <span className="confirm-detail-val">
                  {selectedDate?.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>
              <div className="confirm-detail-row">
                <span className="confirm-detail-key">Time</span>
                <span className="confirm-detail-val">{selectedTime}</span>
              </div>
              <div className="confirm-detail-row">
                <span className="confirm-detail-key">Name</span>
                <span className="confirm-detail-val">{form.name}</span>
              </div>
              <div className="confirm-detail-row">
                <span className="confirm-detail-key">Email</span>
                <span className="confirm-detail-val">{form.email}</span>
              </div>
            </div>
            <button className="confirm-back-btn" onClick={() => {
              setConfirmed(false);
              setSelectedDate(null);
              setSelectedTime(null);
              setForm({ name: "", email: "", phone: "" });
            }}>
              Book Another Session
            </button>
          </div>
        </div>
      ) : (
        <div className="application-page">
            <nav>
<div className="back-btn" style={{textAlign:"left", left:0}}>
            <NavLink to={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
            </svg>
            </NavLink>
            </div>
             </nav>
          <div className="application-header">
            
            <div className="application-header-text">
                <div className="application-header-eyebrow">Redefined Fitness Solution</div>
                <div className="application-header-title">Book Your <em>Session</em></div>
                <div className="application-header-sub">Select a date and time to get started</div>
                <div className="divider">
                <div className="divider-line"></div>
                <div className="divider-dot"></div>
                <div className="divider-line" style={{ background: "linear-gradient(to left, transparent, #c9a35e55)" }}></div>
                </div>
            </div>
           
          </div>

          <div className="application-card">
            {/* CALENDAR */}
            <div className="cal-side">
              <div className="cal-nav">
                <div>
                  <span className="cal-month">{MONTHS[viewMonth]}</span>
                  <span className="cal-year">{viewYear}</span>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <button className="nav-btn" onClick={prevMonth}>‹</button>
                  <button className="nav-btn" onClick={nextMonth}>›</button>
                </div>
              </div>

              <div className="cal-grid">
                {DAYS.map(d => (
                  <div key={d} className="cal-day-application-header">{d}</div>
                ))}
                {cells.map((day, i) => {
                  if (day === null) return <div key={i} className="cal-cell empty" />;
                  const past = isPast(day);
                  const sel = isSelected(day);
                  const isTodayCell =
                    day === today.getDate() &&
                    viewMonth === today.getMonth() &&
                    viewYear === today.getFullYear();
                  let cls = "cal-cell";
                  if (past) cls += " past";
                  else if (sel) cls += " selected";
                  else if (isTodayCell) cls += " today";
                  return (
                    <div key={i} className={cls} onClick={() => handleDateClick(day)}>
                      {day}
                    </div>
                  );
                })}
              </div>

              {selectedDate && (
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid #1e2028" }}>
                  <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#3e3c38", marginBottom: 6 }}>Selected</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "#c9a35e", fontWeight: 300 }}>
                    {selectedDate.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}
                  </div>
                </div>
              )}
            </div>

            {/* TIME SLOTS */}
            <div className="time-side">
              <div className="time-application-header">
                <div className="time-label">Available Times</div>
                {selectedDate ? (
                  <div className="time-date-display">
                    {selectedDate.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}
                  </div>
                ) : (
                  <div className="time-date-display empty">Select a date first</div>
                )}
              </div>
              <div className="time-separator" />

              {selectedDate ? (
                <div className="slots-grid">
                  {TIME_SLOTS.map(slot => {
                    const unavail = UNAVAILABLE.has(slot);
                    const sel = selectedTime === slot;
                    let cls = "slot";
                    if (unavail) cls += " unavailable";
                    else if (sel) cls += " selected";
                    return (
                      <button key={slot} className={cls} onClick={() => handleTimeClick(slot)}>
                        {slot}
                        {unavail && <div style={{ fontSize: 9, letterSpacing: 1, color: "#79756e", marginTop: 2 }}>Booked</div>}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="no-date-msg">
                  <div className="no-date-icon">◷</div>
                  <div className="no-date-text">Choose a date to see availability</div>
                </div>
              )}

              {selectedDate && (
                <div style={{ marginTop: 20, fontSize: 11, color: "#86827a", letterSpacing: 0.5, display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 8, height: 8, background: "#1e2028", borderRadius: 1, display: "inline-block" }}></div>
                  Greyed slots are already booked
                </div>
              )}
            </div>
          </div>

          {/* MODAL */}
          {showModal && (
            <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) setShowModal(false); }}>
              <div className="modal">
                <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
                <div className="modal-eyebrow">Almost there</div>
                <div className="modal-title">Your Details</div>
                <div className="modal-booking-info">
                  <span>{selectedDate?.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long" })}</span>
                  {" · "}
                  <span>{selectedTime}</span>
                </div>

                <div className="field">
                  <label className="field-label">Full Name</label>
                  <input
                    className={`field-input${errors.name ? " error" : ""}`}
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: "" })); }}
                  />
                  {errors.name && <div className="field-error">{errors.name}</div>}
                </div>

                <div className="field">
                  <label className="field-label">Email Address</label>
                  <input
                    className={`field-input${errors.email ? " error" : ""}`}
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: "" })); }}
                  />
                  {errors.email && <div className="field-error">{errors.email}</div>}
                </div>

                <div className="field">
                  <label className="field-label">Contact Number</label>
                  <input
                    className={`field-input${errors.phone ? " error" : ""}`}
                    type="tel"
                    placeholder="+44 7700 900000"
                    value={form.phone}
                    onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(er => ({ ...er, phone: "" })); }}
                  />
                  {errors.phone && <div className="field-error">{errors.phone}</div>}
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}