
import pageloader from "../assets/img/pageloader3.gif";
function Loader() {

    return (
        <div className="loader h-screen w-screen" id="loader">
                <img className="loaderGif m-auto" alt="" src={pageloader} />
            </div>
    );
}
export default Loader