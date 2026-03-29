"use client"

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
    height,
}: VideoSource) => {

    return(
        
            <video controls={controls} width={width} height={height}>
                <source src={src} type={type}/>
                Your browser does not support the video.
            </video>
       
    )
};
export default FitnessVideo;