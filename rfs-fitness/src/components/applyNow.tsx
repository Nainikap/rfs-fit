"use client"
import { NavLink } from 'react-router-dom';
import '../styles/ApplyNow.css'

interface ApplyNowProps {
  text: string;
  variant?: 'primary' | 'dark' | 'outline';
  arrow?: boolean;
}

const ApplyNow = ({ text, variant = 'primary', arrow = false }: ApplyNowProps) => {
  return (
    <NavLink to="/apply" className="apply-now-link">
      <button className={`apply-now apply-now--${variant}`}>
        {text}
        {arrow && <span className="apply-now__arrow">→</span>}
      </button>
    </NavLink>
  );
};

export default ApplyNow;