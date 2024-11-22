import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./loader";


function VideoSearchPage() {
    // var loader = document.getElementById("loader");
    const [PageLoader, SetPageLoader] = useState(true);
    console.log(PageLoader)


    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("search"));
    const [GetSearchResult, SetGetSearchResult] = useState([]);

    useEffect(() => {

        const Fetchsearchresult = async () => {
            const searchresult = await fetch(`https://iv.nowhere.moe/api/v1/search/?q=${searchParams.get("search")}`);
            searchresult.json()
                .then(SearchResult => {
                    console.log(SearchResult, "get main details");
                    SetGetSearchResult(SearchResult);
                     SetPageLoader(false);
                })
        }
       
        Fetchsearchresult()
    }, [searchParams.get("search")]);

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

    return (
        <>
           
            {PageLoader && <Loader/>}
            <Header />
            <div className="flex flex-wrap justify-center pt-24">
                {
                    GetSearchResult.map(getsearchresult =>
                        <Link className="flex" to={`/HtubeVideos/${getsearchresult.videoId}/`}>
                            <div className=' px-5 py-2 flex w-[350px]' style={{ flexDirection: "column" }}>

                                <div className="relative"> <img alt="#" src={getsearchresult?.videoThumbnails ? getsearchresult?.videoThumbnails[1].url : ""} className="w-100 rounded " />
                                    <span className="bg-black whitespace-nowrap text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded absolute left-[78%]
                        top-[76%] w-[65px] text-center">{Convertduration(getsearchresult.lengthSeconds * 1000)}</span>
                                </div>


                                <div className='mt-auto'>
                                    <h1 className='font-bold text-white'>{getsearchresult.title}</h1>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div>
                                            <svg class="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                                            </svg>

                                        </div>
                                        <div className='mt-2 flex' style={{ alignItems: "center" }}>
                                            <div>
                                                <div className='ml-1  text-white'>{getsearchresult.author}<span className='text-white px-1'>|</span>
                                                    <span className="text-white">{getsearchresult.publishedText}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className=''>
                                        <span className=' text-white'>{getsearchresult.viewCountText}</span>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    )

                }
            </div>

        </>
    );
}

export default VideoSearchPage