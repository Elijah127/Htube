import { useState } from "react";
import { useEffect } from "react";
import Loader from "./loader";
import VideoCards from "./VideoCards";

function TrendingVideos() {

    const [PageLoader, SetPageLoader] = useState(true);
    const [TrendingVideosDetails, SetTrendingVideosDetails] = useState([]);
    useEffect(() => {
        try {
            const Fetchdata = async () => {
                const result = await fetch('https://corsproxy.io/?https://invidious.nerdvpn.de/api/v1/trending/');

                const data = await result.json();
                SetTrendingVideosDetails(data);
                  SetPageLoader(false)
                console.log(data);
                // result.json()
                // .then(Results => {
                //     SetTrendingVideosDetails(Results);
                //     console.log(Results);
                //     SetPageLoader(false);
                // })
            }
            Fetchdata()
        }
        catch (err) {
            console.error(err);
        }


    }, []);



    function Convertduration(durationValue) {
        // Convert milliseconds to seconds
        let totalSeconds = Math.floor(durationValue / 1000);

        // Calculate hours
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600; // Remaining seconds after extracting hours

        // Calculate minutes
        let minutes = Math.floor(totalSeconds / 60);
        totalSeconds %= 60; // Remaining seconds after extracting minutes

        // Remaining seconds
        let seconds = totalSeconds;
        if (hours == 0) {
            return minutes + ":" + seconds;
        }
        else {
            // Return the result
            return hours + ":" + minutes + ":" + seconds;
        }




    }

    // console.log(Convertduration(totalduration))


    return (
        <>
            {PageLoader && <Loader />}
            <div className="flex flex-wrap justify-center">
                {
                    TrendingVideosDetails.map(TrendingVideo =>
                        <VideoCards key={TrendingVideo.title}
                            videoname={TrendingVideo.title}
                            videoId={TrendingVideo.videoId}
                            videoAuthor={TrendingVideo.author}
                            videorealisedtime={TrendingVideo.publishedText}
                            videoViews={TrendingVideo.viewCountText}
                            videoDuration={Convertduration(TrendingVideo.lengthSeconds * 1000)}
                            Videoimage={TrendingVideo.videoThumbnails[3].url}
                        />)
                }
            </div>


        </>

    );
}
export default TrendingVideos