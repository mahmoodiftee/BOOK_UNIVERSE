import About from "../About/About";
import FeaturedCategories from "../Featured Categoies/FeaturedCategories";
import Hero from "../Hero/Hero";
import Recomendation from "../Recomended Books/Recomendation";

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <About></About>
            <FeaturedCategories></FeaturedCategories>
            <Recomendation></Recomendation>
        </>
    );
};

export default Home;