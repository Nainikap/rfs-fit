// import '../styles/fitnessVideo.css'

interface VideoSource{
    id: string;
    src: string;
    type: string;
    controls: boolean;
    width: number;
    height: number;
}
const FitnessVideo = ({
    id,
    src,
    type,
    controls,
    width,
    height
}: VideoSource) => {

    return(
        <div id={id} className='video-layout'>
            <video controls={controls} width={width} height={height}>
                <source src={src} type={type}/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
};
export default FitnessVideo;