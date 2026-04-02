"use client"

import '../styles/LandingPage.css'
import FitnessVideo from './fitnessVideo';
const LandingPage = () =>{
    return (
    <div className='landing-page '>
        
        <div className='lp'>
            <div className='lp-bg'>
    <div style={{ margin: "90px" }} />
                 
                <div className='lp-text'>
                    
                    <p className='rfs-heading'>REDEFINED FITNESS <span style={{color:"#ff6b00"}}>SOLUTION</span></p>
                    <p className='rfs-subtext'>For busy professionals who have lost trust in diets and fitness plans</p>
                    <p>Why most plans fail for people with real jobs, real stress and what a sustainable alternative actually looks like.<br/>
                        Watch this short video before you try another program.<br/>
                    </p>
                    <div className='lp-video'>
                    <FitnessVideo
                    id = {"lpVideo"}
                    src ={"/RohitLP.mp4"}
                    type = {"video/mp4"}
                    controls={true}
                    width={720}
                    height={390}
                    /></div>
            </div>
                <div className='lp-left'>
                
            </div>
            <div className='lp-right'>
                <img src='/lp.png' alt='lp-img'/>
            </div>
            </div>
            
            
          {/* //add video */}
              </div>
      </div>
)}
      export default LandingPage;