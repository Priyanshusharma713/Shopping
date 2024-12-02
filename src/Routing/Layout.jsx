import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    const logoutHandle = () => {
        window.localStorage.clear();
        window.location.href = "/login";
      };

      
  return (
    <>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Product">Product</Link>
          </li>
          {/* <li>
            <Link to="/Login">Login</Link>
          </li> */}
          <li>
          <button className="logout-button" onClick={() => logoutHandle()}>Logout</button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
export default Layout;
