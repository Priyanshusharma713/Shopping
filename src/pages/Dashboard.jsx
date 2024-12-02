import Header from "../component/Header";
import Nev from "../component/Nev";

const Dashboard = () => {
  const loginHandle =() => {
    window.localStorage.setItem('userType', 'user')
    window.localStorage.setItem('token', 'token')

    window.location.href = "/Home"
}
  return (
    <>
      <Header />
      <div className="home">
        <h1>Welcome to Our Home Page</h1>
        <div className="all-product">
          <div className="product-card-left"></div>
          <div className="product-card-right">
            <div className="product-box">
              <div className="producat-box-image">
                <img src=" " alt="" />
              </div>
              <div className="producat-box-text">
                <h3>hello</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="about-container">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            Welcome to <strong>Fashion Hub</strong>! We are dedicated to
            providing you with the latest trends and styles in the clothing
            industry.
          </p>
          <p className="about-description">
            Our mission is to create a sustainable fashion experience with
            high-quality materials and ethical practices. We believe that
            fashion should not only look good but also feel good.
          </p>
          <h2 className="about-subtitle">Our Values</h2>
          <ul className="about-list">
            <li>**Sustainability**: Committed to eco-friendly practices.</li>
            <li>**Quality**: Only the best materials for our customers.</li>
            <li>
              **Inclusivity**: Fashion for everyone, regardless of size or
              style.
            </li>
          </ul>
          <p className="about-description">
            Join us on our journey to redefine fashion!{" "}
            <a href="/shop" className="about-link">
              Shop Now
            </a>
          </p>
        </div>
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"/>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>

        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button onClick={() => loginHandle()}>Login</button>
                <p className="forgot-password">
                    <a href="/forgot-password">Forgot Password?</a>
                </p>
            </form>
        </div>
        

      </div>
      <Nev/>
    </>
  );
};
export default Dashboard;
