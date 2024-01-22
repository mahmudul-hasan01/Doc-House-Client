import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

const Home = () => {
    return (
        <div className="">
            <div className="max-w-screen-lg mx-auto">
                <Navbar></Navbar>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;