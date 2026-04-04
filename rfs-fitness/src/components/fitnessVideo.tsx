"use client"

interface VideoSource{
    id: string;
    src: string;
    type: string;
    controls: boolean;
    // width: number;
    // height: number;
    thumbnail: string,
}
const FitnessVideo = ({
    id,
    src,
    type,
    controls,
    // width,
    // height,
    thumbnail,
}: VideoSource) => {

    return(
        
            <video controls={controls} 
            // width={width} height={height}
             style={{
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover", // 🔥 key fix
  }} poster={thumbnail}>
                <source src={src} type={type}/>
                Your browser does not support the video.
            </video>
       
    )
};
export default FitnessVideo;