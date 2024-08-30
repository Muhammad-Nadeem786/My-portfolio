import Navbar from "./components/Navbar";
import SectionBlog from "./components/SectionBlog";
import SectionContact from "./components/SectionContact";
import SiteFooter from "./components/SiteFooter";
import Sitehero from "./components/Sitehero";
import Sitesection from "./components/Sitesection";

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <Sitehero />
            <Sitesection />
            <SectionBlog />
            <SectionContact />
            <SiteFooter />
        </>
    );
};

export default Portfolio;
