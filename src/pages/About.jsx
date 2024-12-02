import Header from "../component/Header";
import Nev from "../component/Nev";
// import Nev from "./nev";

const About = () => {
    
    return(
        <>
        <Header/>
        <div className="home">
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                Welcome to <strong>Fashion Hub</strong>! We are dedicated to providing you with the latest trends and styles in the clothing industry.
            </p>
            <p className="about-description">
                Our mission is to create a sustainable fashion experience with high-quality materials and ethical practices. We believe that fashion should not only look good but also feel good.
            </p>
            <h2 className="about-subtitle">Our Values</h2>
            <ul className="about-list">
                <li>**Sustainability**: Committed to eco-friendly practices.</li>
                <li>**Quality**: Only the best materials for our customers.</li>
                <li>**Inclusivity**: Fashion for everyone, regardless of size or style.</li>
            </ul>
            <p className="about-description">
                Join us on our journey to redefine fashion! <a href="/shop" className="about-link">Shop Now</a>
            </p>
        </div>
        </div>
        <Nev/>
        {/* <Nev/> */}
        </>
    );
};
export default About;