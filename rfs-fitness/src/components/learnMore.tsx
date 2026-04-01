"use client"

import {BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import '../styles/LearnMore.css'
import ApplicationForm from './applicationForm';
import Home from '@/app/page';


const LearnMore = () =>{
    return(
        <nav>

          
        <a href="/" className='learn-more'>learn more</a>
            
        </nav>
    )

};
export default LearnMore;