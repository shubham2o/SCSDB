import Sidenav from "../components/partials/Sidenav";
import Topnav from "../components/partials/Topnav";

const Home = () => {
    document.title = "Moviepedia | Home";

    return (
        <>
            <Sidenav />

            <div className="w-[80%] h-full">
                <Topnav />
            </div>
        </>
    )
}

export default Home;