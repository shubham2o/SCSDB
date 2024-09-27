import { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
    const [query, setQuery] = useState("");

    return (
        <div className="w-full h-[10vh] relative flex justify-start items-center ml-[20%]">
            <i className="ri-search-line text-2xl text-zinc-400"></i>

            <input type="text" placeholder="Search anything" value={query} onChange={(e) => setQuery(e.target.value)}
                className="w-[43.5%] mx-4 border-none p-2.5 text-xl text-white outline-none bg-transparent"
            />

            {query.length > 0 && <i className="ri-close-fill text-2xl text-zinc-400 cursor-pointer" onClick={() => setQuery("")}></i>}

            <div className="w-[50%] max-h-[50vh] rounded-lg bg-zinc-200 absolute top-[94%] overflow-auto">
                {/* <Link className="inline-block w-[100%] border-b-2 border-zinc-100 p-10 text-zinc-700 font-semibold flex justify-start items-center hover:text-black hover:bg-zinc-300 duration-300">
                    <img src="" alt="" />

                    <span>Hello Everyone</span>
                </Link> */}
            </div>
        </div>
    )
};

export default Topnav;