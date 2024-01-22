import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import ContactWithUs from "./ContactWithUs/ContactWithUs";
import Navbar from "./Navbar/Navbar";
import OurService from "./OurService/OurService";
import PatientsSays from "./PatientsSays/PatientsSays";

const Home = () => {
    return (
        <div className="">
            <div className="max-w-screen-xl mx-auto">
                <Navbar></Navbar>
            </div>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto"> 
                <OurService></OurService>
            </div>
            <div className="max-w-screen-xl mx-auto"> 
                <ContactUs></ContactUs>
            </div>
            <div className="max-w-screen-xl mx-auto mt-10"> 
                <PatientsSays></PatientsSays>
            </div>
            <div className="max-w-screen-xl mx-auto mt-10"> 
                <ContactWithUs></ContactWithUs>
            </div>
        </div>
    );
};

export default Home;