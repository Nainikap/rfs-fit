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

           {/* <Link to={`courses/${course}`}>{course}</Link> */}
           <NavLink to={"/apply"}>
        <div className='apply-now'>apply now</div>
            
            </NavLink>
            {/* <Routes>
                <Route path="courses/:courseId" element={<ApplicationForm />} />
            </Routes> */}
        </nav>
    )

};
export default ApplyNow;