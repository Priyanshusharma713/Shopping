import img1 from "../images/logosala.png";
import { userLogin } from "../services/userServices";

const Login = () => {
  const loginHandle = async (e) => {
    e.preventDefault();

    const payload = {
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30,
    }

    try {
      const userLoginInfo = await userLogin(payload);
      console.log('agdhasdgjashdg', userLoginInfo);

      window.localStorage.setItem("userType", "user");
      window.localStorage.setItem("token", userLoginInfo.token);
      window.location.href = "/home"

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="header">
      </header>
      <div className="home">
        <div className="login-container">
          <img src={img1} alt="Logo" />
          <form className="login-form" onSubmit={loginHandle}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <button type="submit">Login</button>
            <p className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </p>
          </form>
        </div>
      <div className="hheader">
        <p></p>
        <p></p>
      </div>
      </div>
    </>
  );
};

export default Login;
