import Header from "../component/Header";
import Nev from "../component/Nev";

const Contact = () => {
    return(
        <>
        <Header/>
        <div className="home">
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"/>

                <button type="submit">Send Message</button>
            </form>
        </div>
        </div>
        <Nev/>
        </>
    );
};
export default Contact;