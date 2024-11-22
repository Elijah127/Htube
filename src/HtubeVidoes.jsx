import Header from "./Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./loader";

function HtubeVideos() {

    let { videoId } = useParams();
    const [Video, SetVideo] = useState([]);
    const [PageLoader, SetPageLoader] = useState(true);
    // useEffect(() => {

    //     const FetchClipsData = async () => {
    //         const Clipsresult = await fetch(`https://invidious.adminforge.de/api/v1/videos/${videoId}`)
    //         Clipsresult.json()
    //             .then(clipsdataresult => {
    //                 console.log(clipsdataresult, "videoDetails");
    //                 SetVideo(clipsdataresult);
    //             })
    //     }
    //     FetchClipsData()
    // }, []);
   function DetectIframeEvent(){
    // alert("loaded")
   }
    return (
        <>
       {/* {PageLoader && <Loader/>}  */}
            <Header />
            <div className="pt-12">
                <div className="lg:p-10 p-5 ">
                    <p><iframe onLoad={DetectIframeEvent} width="100%" height="500" src={`https://www.youtube.com/embed/${videoId}`} title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></p>

                   
                </div>
            </div>
            
        </>


    );

}
export default HtubeVideos