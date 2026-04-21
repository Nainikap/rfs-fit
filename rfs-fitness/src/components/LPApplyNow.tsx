"use client"

import {BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import '../styles/LPApplyNow.css'
import ApplicationForm from './applicationForm';
<BrowserRouter>
  <Routes>
    <Route path="/apply" element={<ApplicationForm />} />
  </Routes>
</BrowserRouter>
interface source{
  text: string,
//   width: string,
}

const LPApplyNow = ({text} : source) =>{
    return(
        <nav>

           <NavLink to={"/apply"}>
        <div className='lp-apply-now'>{text}</div>
            </NavLink>
        </nav>
    )

};
export default LPApplyNow;