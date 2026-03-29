"use client"

import {BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import '../styles/ApplyNow.css'
import ApplicationForm from './applicationForm';
<BrowserRouter>
  <Routes>
    <Route path="/apply" element={<ApplicationForm />} />
  </Routes>
</BrowserRouter>

const ApplyNow = () =>{
    return(
        <nav>

           <NavLink to={"/apply"}>
        <div className='apply-now'>apply now</div>
            </NavLink>
        </nav>
    )

};
export default ApplyNow;