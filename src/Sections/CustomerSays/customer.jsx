import "./customer.css";
import Sliderr from "../../slider/slider";
import { useEffect } from "react";

const Customer = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector(".testimonial");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");

    const handleScroll = (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    };

    const scrollLeft = () => {
      scrollContainer.scrollLeft -= 900;
    };
    const scrollRight = () => (scrollContainer.scrollLeft += 900);

    scrollContainer.addEventListener("wheel", handleScroll);
    backBtn.addEventListener("click", scrollLeft);
    nextBtn.addEventListener("click", scrollRight);

    return () => {
      scrollContainer.removeEventListener("wheel", handleScroll);
      backBtn.removeEventListener("click", scrollLeft);
      nextBtn.removeEventListener("click", scrollRight);
    };
  }, []);

  return (
    <div className="customer">
      <div className="customer-head">
        <h1>What our customers say</h1>
      </div>
      <div className="gallery-warp">
        <div
          className="arrows"
          id="backBtn"
          style={{ cursor: "pointer", zIndex: 1 }}
        ></div>

        <div className="testimonial ">
          <div className="slide">
            <div className="first-person">
              <div className="picture1"></div>

              <div className="message-and-name">
                <div className="message">
                  <h2>
                    Hexnode is of great value. Works great with
                    <h2> Android and iOS</h2>
                  </h2>
                </div>
                <div className="name">
                  <h2>Justin Modrak</h2>
                  <p>Technology Coordinator</p>
                  <p>East Troy Community School District</p>
                </div>
              </div>
            </div>
            <div className="first-person">
              <div className="picture2"></div>

              <div className="message-and-name">
                <div className="message">
                  <h2>
                    Most complete MDM solution I found, and I<br />
                    <h2> tested many of them, including major names</h2>
                  </h2>
                </div>
                <div className="name">
                  <h2>Dalibor Kruljac</h2>
                  <p>KAMELEYA LTD</p>
                </div>
              </div>
            </div>

            <div className="first-person">
              <div className="picture3"></div>

              <div className="message-and-name">
                <div className="message">
                  <h2 className="third-person-msg">
                    it seemed to be in-line with everything we were
                    <h2 className="third-person-msg"> looking at</h2>
                  </h2>
                </div>
                <div className="name">
                  <h2>Chris Robinson</h2>
                  <p>Executive Account Manager, NCS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrows2" id="nextBtn"></div>
        <Sliderr />
      </div>
    </div>
  );
};
export default Customer;
