import "./navbar.css";

const Navbar = () => {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".NavBar");

    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  return (
    <div className="NavBar">
      <div className="nav-first">
        <h1>hexnode</h1>
        <p>Why Hexnode</p>
        <p>Features</p>
        <p>Platforms</p>
        <p>Customers</p>
      </div>
      <div className="nav-second">
        <button>14 DAY FREE TRAIL</button>
      </div>
    </div>
  );
};
export default Navbar;
