import Banner from "../components/Home/Banner/Banner";
import Collection from "../components/Home/Collection/Collection";
import Navbar from "../shared/Navbar";

const MainH = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Collection></Collection>
        </div>
    );
};

export default MainH;