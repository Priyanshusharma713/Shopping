// import Layout from "../Routing/Layout";
import img1 from "../images/logosala.png";
import Layout from "../Routing/Layout";



document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('nav .menu');

  menuToggle.addEventListener('change', function() {
      if (menuToggle.checked) {
          menu.style.display = 'flex';
      } else {
          menu.style.display = 'none';
      }
  });

  menu.addEventListener('click', function() {
      menuToggle.checked = false;
      menu.style.display = 'none';
  });
});

const Header = () => {
  return (
    <>
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive Header</title>
  <header className="headere">
  <div className="logo">
     <img src={img1} alt="Logo" />
      </div>
      <div className="search-container">
       <input type="text" placeholder="Search..." className="search-input" />
      </div>
    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="hamburger">
      ☰
    </label>
    <nav>
      <ul className="menu">
        <li><Layout/> </li>
      </ul>
    </nav>
  </header>
</>

    </>
  );
};
export default Header;
// {/* <div className="logo">
//         <img src={img1} alt="Logo" />
//       </div>
//       <div className="search-container">
//           <input type="text" placeholder="Search..." className="search-input" />
//       </div> */}