"use client"

import '../styles/LandingPage.css'
import ApplyNow from './applyNow';
import FitnessVideo from './fitnessVideo';
import LPApplyNow from './LPApplyNow';

const LandingPage = () =>{
    return (
    <div className='landing-page '>
        
        <div className='lp'>
            <div className='lp-bg'>
    <div style={{ margin: "90px" }} />
                 
                <div className='lp-text'>
                    
                    <p className='rfs-heading'>You've Tried Everything. This Time, <span style={{color:"#ff6b00"}}><br/>It Actually Works</span></p>
                    {/* <p className='rfs-subtext'>"You've Tried Everything. This Time, It Actually Works."</p> */}
                    <i><p>
                    Online coaching for busy professionals <br/> Real results in 90 days. No obsessing over food<br/>
                    </p></i>
                    <div className='lp-video'>
                    <FitnessVideo
                    id = {"lpVideo"}
                    src ={"/RohitLP.mp4"}
                    type = {"video/mp4"}
                    controls={true}
                    // width={720}
                    // height={390}
                    thumbnail={"lp_thumb.png"}
                    /></div>
                    <div className='lp-cta' style={{paddingTop:"10px"}}>
                    <LPApplyNow text={"I'M READY TO START"} /></div>
            </div>
                <div className='lp-left'>
                
            </div>
            <div className='lp-right'>
                <img src='/lp.png' alt='lp-img'/>
            </div>
             <div className={`lp-logo `}>
                <img src='/logo.jpeg' alt='lp-logo-img'/>
            </div>
            </div>
            
            
          {/* //add video */}
              </div>
      </div>
)}
      export default LandingPage;