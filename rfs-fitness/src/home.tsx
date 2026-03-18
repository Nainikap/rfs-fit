"use client"
import { useRef } from 'react'
import Navbar from './components/navbar'
import './App.css'
import './components/roundedPointer'
import RoundedPointer from './components/roundedPointer'
import CalenderPlan from './components/calenderPlan'
import MistakeContainer from './components/mistakeContainer'
import ApplyNow from './components/applyNow'
import DonutChart from './components/donut'
import ErrorBoundary from './components/errorBoundary'
import FitnessVideo from './components/fitnessVideo'
import "./chartConfig";
import LandingPage from './components/landingPage'
const CARDS = [
  { text: "have a plan that fits you" },
  { text: "track your progress easily" },
  { text: "set goals that matter" },
  { text: "stay consistent daily" },
  { text: "review your week" },
  { text: "build better habits" },
];
const mistakes = [
  {text: "Overcomplicating Everything Tracking, apps, numbers, rules becomes overwhelming fast. We simplify."},
  {text: "Relying on Motivation Motivation fades. Systems don’t."},
  {text: "Ignoring Stress & Lifestyle Stress-driven hunger is real."}
]
const videos = [
  {id: "1", src: "/vid1.MP4", type: "video/mp4"},
  {id: "2", src: "/vid2.MP4", type: "video/mp4"},
  {id: "3", src: "/vid3.MP4", type: "video/mp4"},
]


function Home() {


  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRight = () =>{
    scrollRef.current?.scrollBy({ left: 660, behavior: 'smooth' });
  }
  return (
    <>
    <div className='navBar' >
        <Navbar/></div>
<LandingPage/>
      {/* section 2 */}
      <div className='section-2'>
        <div className='section-2-text'>
          <div className='top-text'>What Would Life Look Like
            If Fat Loss Felt.....</div>
          <div className='bottom-text'>Normal?</div>

        </div>
        <div className='section-2-images'>
          <div className='section-2-compare'>
            <img src='/transformation 1A.jpeg' alt='transformation'/>
            <img src='/transformation 1B.jpeg' alt='transformation'/>
            <img src='/transformation 2A.jpeg' alt='transformation'/>
            <img src='/transformation 2B.jpeg' alt='transformation'/>
          </div>
           <div className='section-2-compare'>
            <img src='/transformation 3A.jpeg' alt='transformation'/>
            <img src='/transformation 3B.jpeg' alt='transformation'/>
            <img src='/transformation 4A.jpeg' alt='transformation'/>
            <img src='/transformation 4B.jpeg' alt='transformation'/>

          </div>
          </div>
      </div>
      {/* section 3 */}
      <div className='section-3'>
        <div className='section-3-left-text'>
          <div className='left-text-heading'
        >nothing works.</div>
          <div className='left-text-body'>
            <p> You’ve cut foods</p>
            <p>You’ve been consistent</p>
            <p>YOU DON’T lack  willpower</p>
            <p> You’ve forced routines into busy days</p>

          </div>
          
        </div>
        <div className='section-3-right-text'>
          <p className='right-text-top'> It’s time for an 
approach that works for</p>
<p className='right-text-bottom'>you</p>
        </div>
      </div>
      <div className='section-4'>
        <div className='section4-heading'>
          Say goodbye to
        </div>
        <div className='section-points'>
          <RoundedPointer text={"Start over every Monday"}/>
          <RoundedPointer text={"Feeling guilty after meals"}/>
          <RoundedPointer text={"Forcing workouts you hate"}/>
          <RoundedPointer text={"Relying on motivation"}/>
        </div>
      </div>
      <div className='section-5'>
        <div className='section-5-containers' ref={scrollRef}>
         
            {
              videos.map((video) => (
                <FitnessVideo
                key={video.id}
                id = {video.id}
                src = {video.src}
                type = {video.type}
                controls = {true}
                width={640}
                height={640}
                />
              ))
            }
          </div>
          <div className='scroll-arrow' onClick={scrollRight}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
          </div>
         
      </div>
      <div className="section-6">
    <div className="left-text">
      Experience what it's like
    </div>
    <div className="right-grid">
      {CARDS.map((card, i) => (
        <div className="cell" key={i}>
          <CalenderPlan text={card.text} />
        </div>
      ))}
    </div>
  </div>
  <div className='section-7'>
    <div className='section7-heading'>
        Why Most Professionals Struggle With Fat Loss (Even When They “Try Hard”)

    </div>
    <div className='containers'>
       {mistakes.map((mistake, i) => (
        <div className="container" key={i}>
          <MistakeContainer text={mistake.text} num={i+1}/>
        </div>
      ))}
    </div>

  </div>
  <div className='section-8'>
    <div className='subsection'>
      
      <div className='heading'>
        IT’s Time To Replace Chaos with Structure
      </div>
      <div className='boxes'>
        <div className='box-in'>predictable progress</div>
        <div className='box-in'>Less food stress</div>
        <div className='box-in'>A plan that fits life</div>
        
      </div>
      <ApplyNow/>
    </div>
  </div>
  <div className='section-9'>
    <div className='heading'>
      What Happens When You Apply?

    </div>
    <div className='graph'>
      <ErrorBoundary>
        <DonutChart key="donut-chart"/>
      </ErrorBoundary>
      
    </div>
  </div>

  <div className='section-10'>
    <div className='heading'>You can stay on the same exhausting loop:
</div>
    <div className='body'>
      <ol>
        <li>force yourself to the gym when you're tired</li>
        <li>Eat chicken & broccoli for the rest of your life</li>
        <li>Count calories like it’s your second job</li>
        <li>Feel guilty every time you slip</li>
      </ol>
    </div>
  </div>
  <div className='section-11'>
    <div className='section-11-text'>or take control</div>
    <div className='section-11-apply'>
    <ApplyNow/>

    </div>
  </div>
    </>
  )
}

export default Home;
