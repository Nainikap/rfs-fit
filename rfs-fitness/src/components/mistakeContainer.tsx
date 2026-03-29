"use client"

import '../styles/MistakeContainer.css'

type MistakeContainerProps = {
  text: string;
  num: number;
};

const MistakeContainer = ({ text,num }: MistakeContainerProps) => {
    return(
        <div>
            <div className={`container`}>
                <div className="heading">
                  {/* Mistake {" "} {num.toString()} */}
                </div>
                <div className='description'>
                    {text}

                </div>
            </div>
        </div>
    )
};
export default MistakeContainer;