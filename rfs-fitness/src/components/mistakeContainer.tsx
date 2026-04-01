"use client"

import '../styles/MistakeContainer.css'
import LearnMore from './learnMore';
type MistakeContainerProps = {
  heading:string;
  text: string;
  num: number;
};

const MistakeContainer = ({ heading,text,num }: MistakeContainerProps) => {
    return(
        
            <div className={`container`}>
                <div className="heading">
                  {heading}<br/>
                </div>
                <div className='description'>
                    <p style={{paddingBottom:"2rem"}}>{text}</p>
                    <LearnMore/>
                </div>
            </div>
        
    )
};
export default MistakeContainer;