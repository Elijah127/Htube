import { Input } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import Logo from '../assets/img/htudelogo-removebg-preview.png'
import { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { useDebounce } from '../hooks/debounce';


function Header() {
    // https://yt.artemislena.eu/api/v1/api/v1/search;
    const dropdownRef = useRef(null);


    const [searchSuggestions, SetsearchSuggestions] = useState([]);


    const [searchInputText, setSearchInputText] = useState("");


    const searchText = useDebounce(searchInputText, 1000);


    async function Videosearch(event) {
        const elem = dropdownRef.current;
        elem.style.display = "block";
        let value = event.target.value;
        setSearchInputText(value);
    }

    useEffect(() => {
        const FetchSearchSuggestions = async () => {
            const SearchSuggestionsResult = await fetch(`https://invidious.adminforge.de/api/v1/search/suggestions/?q="${searchText}"`);
            SearchSuggestionsResult.json()
                .then(searchsuggestionsresult => {
                    console.log(searchsuggestionsresult.suggestions)
                    SetsearchSuggestions(searchsuggestionsresult.suggestions, "search suggestions running");
                })
        }
        if (searchText) {
            FetchSearchSuggestions();
        }
    }, [searchText])





    useOutsideAlerter(dropdownRef, function () {
        const elem = dropdownRef.current;
        elem.style.display = "none";
        // alert("working");
        console.log(elem)

    });





    return (
        <>
            <div className="w-screen flex header-shadow fixed z-50 bg-black py-3" style={{ alignItems: "center" }}>
                <a href="/" className='mx-auto md:mx-1'>
                    <div className="flex align-middle my-auto ml-5">
                        <img src={Logo} className="h-12 w-12" />
                        <h1 className='font-bold flex text-xl text-white' style={{ alignItems: "center" }}>H tube</h1>

                    </div>
                </a>

                {/*  screen header */}


                <div className="my-auto ml-auto md:mr-6 hidden md:block">
                    <div className="search-container w-[300px] " >
                        <input
                            type="text"
                            onChange={Videosearch}
                            placeholder="Search..."
                            className="rounded"
                        />
                        <ul ref={dropdownRef} className="dropdown-menu">
                            {

                                searchSuggestions.map(searchsuggestions =>
                                    <Link key={searchsuggestions} to={`/VideoSearchPage?search=${searchsuggestions}`}>
                                        <li >
                                            {searchsuggestions}
                                        </li>
                                    </Link>)
                            }

                        </ul>
                    </div>
                </div>
            </div>
            {/* small screen searchbar */}
            <div className="my-auto block md:hidden pt-[5rem] mx-5">
                <div className="search-container [w-100%]" >
                    <input
                        type="text"
                        onChange={Videosearch}
                        placeholder="Search..."
                        className="rounded"
                    />
                       <ul ref={dropdownRef} className="dropdown-menu">
                            {

                                searchSuggestions.map(searchsuggestions =>
                                    <Link key={searchsuggestions} to={`/VideoSearchPage?search=${searchsuggestions}`}>
                                        <li >
                                            {searchsuggestions}
                                        </li>
                                    </Link>)
                            }

                        </ul>
                </div>
            </div>

        </>
    );

}


function useOutsideAlerter(ref, functionHandler) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                functionHandler();
                // alert("woking")
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          
        };
    }, [ref]);
}

export default Header
