// import testimage from './assets/img/HtudeLogo.jpeg'
import { Link } from "react-router-dom";

function VideoCards(props) {

    return (
        <>
            <Link to={`/HtubeVideos/${props.videoId}/`}>
                <div className='hover:p-8 ease-in duration-300 px-5 py-2 flex w-[350px]' style={{ flexDirection: "column" }}>

                    <div className="relative"> <img alt="#" src={props.Videoimage} className="w-100 rounded " />
                        <span className="bg-black whitespace-nowrap text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded absolute left-[78%]
                        top-[76%] w-[65px] text-center">{props.videoDuration}</span>
                    </div>


                    <div className='mt-auto'>
                        <h1 className='font-bold text-white'>{props.videoname}</h1>
                            <div style={{ display:"flex", alignItems: "center" }}>
                                <div>
                                    <svg class="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                                    </svg>

                                </div>
                                <div className='mt-2 flex' style={{ alignItems: "center" }}>
                                    <div>
                                        <div className='ml-1  text-white'>{props.videoAuthor}<span className='text-white px-1'>|</span>
                                            <span className="text-white">{props.videorealisedtime}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className=''>
                                <span className=' text-white'>{props.videoViews}</span>
                            </div>
                    </div>

                </div>
            </Link>



        </>
    );
}
export default VideoCards