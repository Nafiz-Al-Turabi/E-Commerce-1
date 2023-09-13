import Banner from "../components/Home/Banner/Banner";
import Categories from "../components/Home/Categories/Categories";
import Collection from "../components/Home/Collection/Collection";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MainH = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Banner></Banner>
            <Collection></Collection>
            <Categories></Categories>
            <Footer></Footer>
        </div>
    );
};

export default MainH;