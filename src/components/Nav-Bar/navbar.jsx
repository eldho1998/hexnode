import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [display, setDisplay] = useState(false);

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".NavBar");

    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const whyHexnodeClick = () => {
    smoothScroll(780);
    setDisplay(!display);
    setIsDisabled(true);
  };
  const featuresClick = () => {
    smoothScroll(1600);
    setDisplay(!display);
    setIsDisabled(true);
  };
  const platformClick = () => {
    smoothScroll(2800);
    setDisplay(!display);
    setIsDisabled(true);
  };
  const customerClick = () => {
    smoothScroll(3460);
    setDisplay(!display);
    setIsDisabled(true);
  };

  const smoothScroll = (targetY) => {
    let startY = window.scrollY;
    let distance = targetY - startY;
    let duration = 500;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startY, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="NavBar">
      <div className="nav-first">
        <h1>hexnode</h1>
        <p onClick={whyHexnodeClick} disabled={isDisabled}>
          Why Hexnode
        </p>
        <p onClick={featuresClick} disabled={isDisabled}>
          Features
        </p>
        <p onClick={platformClick} disabled={isDisabled}>
          Platforms
        </p>
        <p onClick={customerClick} disabled={isDisabled}>
          Customers
        </p>
      </div>
      <div className="nav-second">
        <button>14 DAY FREE TRAIL</button>
      </div>
    </div>
  );
};
export default Navbar;
