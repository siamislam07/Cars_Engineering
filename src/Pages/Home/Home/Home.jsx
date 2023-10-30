import About from "../About/About";
import Banner from "../Banner/Banner";
import Choose from "../ChooseUs/Choose";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Teams from "../Team/Teams";
import Services from "../services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            <Teams></Teams>
            <Choose></Choose>
        </div>
    );
};

export default Home;