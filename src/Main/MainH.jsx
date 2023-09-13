import Banner from "../components/Home/Banner/Banner";
import Navbar from "../shared/Navbar";

const MainH = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default MainH;