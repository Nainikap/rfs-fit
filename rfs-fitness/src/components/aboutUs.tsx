"use client"
import React from "react";
import "../styles/AboutUs.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const stats = [
  { num: "24/7", label: "Support", sub: "Always on" },
  { num: "30+", label: "Working", sub: "Professionals" },
  { num: "100+", label: "Countries", sub: "Operational" },
  { num: "100%", label: "Personalised", sub: "Programmes" },
];

const coaches = [
  {
    initials: "G",
    name: "Coach G",
    handle: "@rohitsalil",
    number: "01",
    bio: [
      <>For years, he was stuck in a cycle — overweight, frustrated and trying every program, only to fall back again. Discipline was never the problem. Direction was.</>,
      <>During the lockdown, trial and error turned into deep learning. What began as a personal struggle evolved into a structured system that delivered real results.</>,
      <>He didn't just find a workout. He built a lifestyle.</>,
      <>Coach G is the result of that evolution — built on real mistakes, so you don't have to make them. No guesswork. Just what works.</>,
    ],
  },
  {
    initials: "J",
    name: "Coach J",
    handle: "@jaineeldj",
    number: "02",
    bio: [
      <>He spent a long time trapped in the "skinny-fat" cycle — struggling to build muscle while navigating a strict vegetarian diet and recovering from a back injury. He didn't lack effort. He lacked a blueprint.</>,
      <>During the lockdown, he chose to rebuild. By applying the structure of the RFS system, trial and error finally turned into results.</>,
      <>Coach J didn't just transform his body — he rebuilt his strength, confidence and discipline.</>,
      <>Today, he helps others move beyond the plateau to build strong, sustainable physiques. No matter the starting point, the structure works.</>,
    ],
  },
];

const programmes = [
  {
    tag: "Popular",
    tagType: "popular",
    name: "RFS Weight Loss",
    desc: "A results-driven programme to reduce body fat through structured nutrition, habit-building, and accountability.",
    features: [
      "Initial Consultation",
      "24/7 Support",
      "Macro/Micronutrient Guidance",
      "Daily Weigh-Ins",
      "Weekly Physique Updates",
      "Habit Tracking",
    ],
  },
  {
    tag: "Popular",
    tagType: "popular",
    name: "RFS Body Recomposition",
    desc: "Lose fat and build muscle simultaneously — combining nutritional strategy and fitness guidance to reshape your body.",
    features: [
      "Initial Consultation",
      "24/7 Support",
      "Macro/Micronutrient Guidance",
      "Daily Weigh-Ins & Physique Updates",
      "Fitness Consultation",
      "Full Training Routine",
    ],
  },
  {
    tag: "Specialised",
    tagType: "specialised",
    name: "RFS Personal Training",
    desc: "Customised training built around your goals — tailor-made workouts, expert feedback, and ongoing support.",
    features: [
      "Initial Consultation",
      "24/7 Support",
      "Fully Customised Training Plan",
      "Fitness Consultation",
      "Form & Movement Feedback",
      "Habit Tracking",
    ],
  },
  {
    tag: "Specialised",
    tagType: "specialised",
    name: "RFS Health & Nutrition",
    desc: "An education-first service to master the fundamentals of healthy nutrition and optimise your diet for long-term wellbeing.",
    features: [
      "Initial Consultation",
      "24/7 Support",
      "Nutritional Advice & Education",
      "Macro/Micronutrient Guidance",
      "Optimised Food Intake",
      "Nutritional Health Tracking",
    ],
  },
];

export default function AboutUs(){
  return (
    <section className="rfs-about">
      <Navbar/>
      {/* ── Brand Block ── */}
      <div className="rfs-brand">
        {/* <p className="rfs-eyebrow">About Us</p>
        <h2 className="rfs-brand-heading">
          Redefined<br />
          <span className="rfs-orange">Fitness Solutions</span>
        </h2> */}
        <div className="brand-about">
        <p className="rfs-brand-body">
          In a crowded fitness landscape, sustainable results demand more than effort and
          commitment. They require structure, clarity and sustainability.
        </p>
        <p className="rfs-brand-body">
          At RFS Fitness, we bridge the gap for busy working professionals, founders, managers
          and executives who understand discipline but need a system that works with their lives.
        </p>
        <p className="rfs-brand-body">
          We're not chasing trends. We're building standards that support your professional edge.
        </p>
        {/* <p className="rfs-brand-handle">@rfsfitness</p> */}</div>
      </div>

      {/* ── Divider ── */}
      {/* <div className="rfs-divider">
        <div className="rfs-divider-line" />
        <div className="rfs-divider-dot" />
        <div className="rfs-divider-line" />
      </div> */}

      {/* ── Coaches ── */}
      <div className="rfs-coaches-label">
        <p className="rfs-eyebrow">Meet the coaches</p>
      </div>
      <div className="rfs-coach-banner">
        <img src="/banner.jpeg" />
      </div>
      <div className="rfs-coaches">
        {coaches.map((coach) => (
          <div className="rfs-coach" key={coach.name}>
            <div className="rfs-coach-accent" />
            <div className="rfs-coach-num">{coach.number}</div>
            <div className="rfs-avatar-wrap">
              <div className="rfs-avatar-placeholder">
                <span>{coach.initials}</span>
              </div>
              <div className="rfs-coach-title">
                <p className="rfs-coach-name">{coach.name}</p>
                <p className="rfs-coach-handle">{coach.handle}</p>
              </div>
            </div>
            <div className="rfs-coach-body">
              {coach.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      

      {/* ── Stats Bar ── */}
      <div className="rfs-stats">
        {stats.map((s) => (
          <div className="rfs-stat" key={s.label}>
            <div className="rfs-stat-top" />
            <div className="rfs-stat-num">{s.num}</div>
            <div className="rfs-stat-label">
              {s.label}
              <br />
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      {/* ── Programmes ── */}
      <div className="rfs-prog-header">
        <p className="rfs-eyebrow">What we offer</p>
        <h2 className="rfs-prog-heading">
          Our <span className="rfs-orange">Programmes</span>
        </h2>
      </div>

      <div className="rfs-programmes">
        {programmes.map((prog) => (
          <div className="rfs-prog" key={prog.name}>
            <div className="rfs-prog-accent-corner" />
            <span className={`rfs-prog-tag ${prog.tagType}`}>{prog.tag}</span>
            <p className="rfs-prog-name">{prog.name}</p>
            <p className="rfs-prog-desc">{prog.desc}</p>
            <ul className="rfs-prog-features">
              {prog.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link to="/apply" className="rfs-prog-cta">
              Enquire now
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
};

// export default AboutUs;
