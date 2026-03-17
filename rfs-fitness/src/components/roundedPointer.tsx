import '../styles/roundedPointer.css'

type RoundedPointerProps = {
  text: string;
};

const RoundedPointer = ({ text }: RoundedPointerProps) => {
    return(
        <div>
            <div className="ptr-box">
                 <span className="ptr-dot" />
                 <p className='ptr-text'>{text}</p>
            </div>
        </div>
    )
};
export default RoundedPointer;