import { Outlet } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";

const LayOut = () => {
    return (
        <div>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;