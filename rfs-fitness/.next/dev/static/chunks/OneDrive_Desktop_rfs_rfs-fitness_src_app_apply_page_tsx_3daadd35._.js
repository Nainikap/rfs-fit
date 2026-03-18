(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApplicationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/rfs/rfs-fitness/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/rfs/rfs-fitness/node_modules/next/router.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/rfs/rfs-fitness/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const DAYS = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT"
];
const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const TIME_SLOTS = [
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM"
];
const UNAVAILABLE = new Set([
    "6:00 AM",
    "11:00 AM",
    "2:00 PM",
    "7:00 PM"
]);
function ApplicationForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const today = new Date();
    const [viewYear, setViewYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(today.getFullYear());
    const [viewMonth, setViewMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(today.getMonth());
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedTime, setSelectedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmed, setConfirmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const prevMonth = ()=>{
        if (viewMonth === 0) {
            setViewMonth(11);
            setViewYear((y)=>y - 1);
        } else setViewMonth((m)=>m - 1);
    };
    const nextMonth = ()=>{
        if (viewMonth === 11) {
            setViewMonth(0);
            setViewYear((y)=>y + 1);
        } else setViewMonth((m)=>m + 1);
    };
    const isPast = (day)=>{
        const d = new Date(viewYear, viewMonth, day);
        d.setHours(0, 0, 0, 0);
        const t = new Date();
        t.setHours(0, 0, 0, 0);
        return d < t;
    };
    const isSelected = (day)=>selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === viewMonth && selectedDate.getFullYear() === viewYear;
    const handleDateClick = (day)=>{
        if (isPast(day)) return;
        setSelectedDate(new Date(viewYear, viewMonth, day));
        setSelectedTime(null);
    };
    const handleTimeClick = (slot)=>{
        if (UNAVAILABLE.has(slot)) return;
        setSelectedTime(slot);
        setShowModal(true);
    };
    const validate = ()=>{
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
        if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) e.phone = "Valid phone required";
        return e;
    };
    const handleSubmit = async ()=>{
        const e = validate();
        if (Object.keys(e).length) {
            setErrors(e);
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    contact: form.phone,
                    timeSlot: selectedTime
                })
            });
            if (!res.ok) throw new Error('Request failed'); // manual error check
            const data = await res.json();
            console.log("success", data);
        } catch (err) {
            console.error("error", err);
        }
        setShowModal(false);
        setConfirmed(true);
    };
    const cells = Array.from({
        length: firstDay + daysInMonth
    }, (_, i)=>i < firstDay ? null : i - firstDay + 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: confirmed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "confirmation",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "back-btn",
                    style: {
                        textAlign: "left",
                        left: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "black",
                        className: "bi bi-arrow-bar-left",
                        viewBox: "0 0 16 16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                    lineNumber: 108,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "confirm-application-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "confirm-icon",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "confirm-eyebrow",
                            children: "Booking Confirmed"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "confirm-title",
                            children: [
                                "You're all ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "set"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 26
                                }, this),
                                ",",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 39
                                }, this),
                                form.name.split(" ")[0]
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "confirm-body",
                            children: "Your session has been successfully scheduled. Our fitness coach will be in touch with you shortly to prepare your personalised programme."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "confirm-details",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "confirm-detail-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "confirm-detail-key",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "confirm-detail-val",
                                            children: selectedDate?.toLocaleDateString("en-GB", {
                                                weekday: "short",
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "confirm-detail-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "confirm-detail-key",
                                            children: "Time"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "confirm-detail-val",
                                            children: selectedTime
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "confirm-detail-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "confirm-detail-key",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "confirm-detail-val",
                                            children: form.name
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "confirm-detail-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "confirm-detail-key",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "confirm-detail-val",
                                            children: form.email
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "confirm-back-btn",
                            onClick: ()=>{
                                setConfirmed(false);
                                setSelectedDate(null);
                                setSelectedTime(null);
                                setForm({
                                    name: "",
                                    email: "",
                                    phone: ""
                                });
                            },
                            children: "Book Another Session"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
            lineNumber: 107,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "application-page",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "back-btn",
                        style: {
                            textAlign: "left",
                            left: 0
                        },
                        onClick: ()=>router.push('/'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "26",
                            height: "26",
                            fill: "black",
                            className: "bi bi-arrow-bar-left",
                            viewBox: "0 0 16 16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                            lineNumber: 157,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                        lineNumber: 155,
                        columnNumber: 1
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                    lineNumber: 154,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "application-header",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "application-header-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "application-header-eyebrow",
                                children: "Redefined Fitness Solution"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 166,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "application-header-title",
                                children: [
                                    "Book Your ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "Session"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 69
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 167,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "application-header-sub",
                                children: "Select a date and time to get started"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divider",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divider-line"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divider-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divider-line",
                                        style: {
                                            background: "linear-gradient(to left, transparent, #c9a35e55)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "application-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cal-side",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cal-nav",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "cal-month",
                                                    children: MONTHS[viewMonth]
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "cal-year",
                                                    children: viewYear
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "nav-btn",
                                                    onClick: prevMonth,
                                                    children: "‹"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "nav-btn",
                                                    onClick: nextMonth,
                                                    children: "›"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cal-grid",
                                    children: [
                                        DAYS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cal-day-application-header",
                                                children: d
                                            }, d, false, {
                                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)),
                                        cells.map((day, i)=>{
                                            if (day === null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cal-cell empty"
                                            }, i, false, {
                                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 44
                                            }, this);
                                            const past = isPast(day);
                                            const sel = isSelected(day);
                                            const isTodayCell = day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
                                            let cls = "cal-cell";
                                            if (past) cls += " past";
                                            else if (sel) cls += " selected";
                                            else if (isTodayCell) cls += " today";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: cls,
                                                onClick: ()=>handleDateClick(day),
                                                children: day
                                            }, i, false, {
                                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 24,
                                        paddingTop: 20,
                                        borderTop: "1px solid #1e2028"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 9,
                                                letterSpacing: 2,
                                                textTransform: "uppercase",
                                                color: "#3e3c38",
                                                marginBottom: 6
                                            },
                                            children: "Selected"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Cormorant Garamond', serif",
                                                fontSize: 16,
                                                color: "#c9a35e",
                                                fontWeight: 300
                                            },
                                            children: selectedDate.toLocaleDateString("en-GB", {
                                                weekday: "long",
                                                day: "numeric",
                                                month: "long"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "time-side",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "time-application-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "time-label",
                                            children: "Available Times"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this),
                                        selectedDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "time-date-display",
                                            children: selectedDate.toLocaleDateString("en-GB", {
                                                weekday: "long",
                                                day: "numeric",
                                                month: "long"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "time-date-display empty",
                                            children: "Select a date first"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "time-separator"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this),
                                selectedDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "slots-grid",
                                    children: TIME_SLOTS.map((slot)=>{
                                        const unavail = UNAVAILABLE.has(slot);
                                        const sel = selectedTime === slot;
                                        let cls = "slot";
                                        if (unavail) cls += " unavailable";
                                        else if (sel) cls += " selected";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: cls,
                                            onClick: ()=>handleTimeClick(slot),
                                            children: [
                                                slot,
                                                unavail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 9,
                                                        letterSpacing: 1,
                                                        color: "#79756e",
                                                        marginTop: 2
                                                    },
                                                    children: "Booked"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, slot, true, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "no-date-msg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "no-date-icon",
                                            children: "◷"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "no-date-text",
                                            children: "Choose a date to see availability"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 257,
                                    columnNumber: 17
                                }, this),
                                selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 20,
                                        fontSize: 11,
                                        color: "#86827a",
                                        letterSpacing: 0.5,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 8,
                                                height: 8,
                                                background: "#1e2028",
                                                borderRadius: 1,
                                                display: "inline-block"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 19
                                        }, this),
                                        "Greyed slots are already booked"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                            lineNumber: 227,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this),
                showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-overlay",
                    onClick: (e)=>{
                        if (e.target === e.currentTarget) setShowModal(false);
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "modal-close",
                                onClick: ()=>setShowModal(false),
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 276,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-eyebrow",
                                children: "Almost there"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 277,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-title",
                                children: "Your Details"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 278,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-booking-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: selectedDate?.toLocaleDateString("en-GB", {
                                            weekday: "short",
                                            day: "numeric",
                                            month: "long"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 19
                                    }, this),
                                    " · ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: selectedTime
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 279,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field-label",
                                        children: "Full Name"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: `field-input${errors.name ? " error" : ""}`,
                                        placeholder: "Jane Smith",
                                        value: form.name,
                                        onChange: (e)=>{
                                            setForm((f)=>({
                                                    ...f,
                                                    name: e.target.value
                                                }));
                                            setErrors((er)=>({
                                                    ...er,
                                                    name: ""
                                                }));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 19
                                    }, this),
                                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field-error",
                                        children: errors.name
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 285,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field-label",
                                        children: "Email Address"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: `field-input${errors.email ? " error" : ""}`,
                                        type: "email",
                                        placeholder: "jane@example.com",
                                        value: form.email,
                                        onChange: (e)=>{
                                            setForm((f)=>({
                                                    ...f,
                                                    email: e.target.value
                                                }));
                                            setErrors((er)=>({
                                                    ...er,
                                                    email: ""
                                                }));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 298,
                                        columnNumber: 19
                                    }, this),
                                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field-error",
                                        children: errors.email
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 296,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field-label",
                                        children: "Contact Number"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: `field-input${errors.phone ? " error" : ""}`,
                                        type: "tel",
                                        placeholder: "+44 7700 900000",
                                        value: form.phone,
                                        onChange: (e)=>{
                                            setForm((f)=>({
                                                    ...f,
                                                    phone: e.target.value
                                                }));
                                            setErrors((er)=>({
                                                    ...er,
                                                    phone: ""
                                                }));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 19
                                    }, this),
                                    errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field-error",
                                        children: errors.phone
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                        lineNumber: 317,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 308,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "submit-btn",
                                onClick: handleSubmit,
                                children: "Confirm Booking"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                                lineNumber: 320,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                        lineNumber: 275,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
                    lineNumber: 274,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/rfs/rfs-fitness/src/app/apply/page.tsx",
            lineNumber: 153,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(ApplicationForm, "3UUFmm9W217gieYy84ym2k9ZdMg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$rfs$2f$rfs$2d$fitness$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ApplicationForm;
var _c;
__turbopack_context__.k.register(_c, "ApplicationForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_rfs_rfs-fitness_src_app_apply_page_tsx_3daadd35._.js.map