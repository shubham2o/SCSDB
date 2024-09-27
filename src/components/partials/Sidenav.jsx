import { Link } from "react-router-dom";

const Sidenav = () => {
    return (
        <div className="w-[20%] h-full border-r border-zinc-400 p-10">
            <h1 className="text-2xl text-white font-bold">
                <i className="ri-tv-fill mr-1.5 text-[#6556CD]"></i>

                <span className="">Moviepedia</span>
            </h1>

            <nav className="text-zinc-300 text-xl flex flex-col gap-3">
                <h1 className="mt-10 mb-5 text-xl font-semibold">New Feeds</h1>

                <Link className="rounded-lg p-4 duration-200 hover:bg-[#6556CD] hover:text-white">
                    <i className="ri-fire-fill mr-1.5"></i>
                    Trending
                </Link>

                <Link className="rounded-lg p-4 duration-200 hover:bg-[#6556CD] hover:text-white">
                    <i className="ri-bard-fill mr-2"></i>
                    Popular
                </Link>

                <Link className="rounded-lg p-4 duration-200 hover:bg-[#6556CD] hover:text-white">
                    <i className="ri-movie-2-fill mr-2"></i>
                    Movies
                </Link>

                <Link className="rounded-lg p-4 duration-200 hover:bg-[#6556CD] hover:text-white">
                    <i className="ri-tv-2-fill mr-2"></i>
                    TV Shows
                </Link>

                <Link className="rounded-lg p-4 duration-200 hover:bg-[#6556CD] hover:text-white">
                    <i className="ri-team-fill mr-2"></i>
                    People
                </Link>
            </nav>

            <hr className="h-[1px] border-none bg-zinc-400" />

            <nav className="text-zinc-300 text-xl flex flex-col gap-3">
                <h1 className="mt-10 mb-5 text-xl font-semibold">Website Information</h1>

                <Link className="rounded-lg p-4 duration-200 hover:bg-[#6556CD] hover:text-white">
                    <i className="ri-information-fill mr-1.5"></i>
                    About
                </Link>

                <Link className="rounded-lg p-4 duration-200 hover:bg-[#6556CD] hover:text-white">
                    <i className="ri-phone-fill mr-2"></i>
                    Contact us
                </Link>
            </nav>
        </div>
    )
}

export default Sidenav;