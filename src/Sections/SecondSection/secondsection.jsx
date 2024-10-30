import "./secondsection.css";

const SecondSection = () => {
  return (
    <div className="secondSection">
      <div className="idc">
        <div className="idcHead"></div>
        <div className="idcContent">
          <p>
            Hexnode is listed as a leader and a major<br></br> player in IDC
            MarketScape UEM Vendors <br></br>Assessment Reports 2024.
          </p>
        </div>
      </div>

      <hr className="firstLine"></hr>

      <div className="gartner">
        <div className="gartnerHead"></div>
        <div className="gartnerContent">
          <p>
            Hexnode mentioned as a Notable Vendor in <br></br> Midmarket
            Context: Magic Quadrant for<br></br> Unified Endpoint Management
            tools 2022.
          </p>
        </div>
      </div>
      <hr className="firstLine"></hr>
      <div className="forrester">
        <div className="forresterHead"></div>
        <div className="forresterContent">
          <p>
            Forrester includes Hexnode as a Notable<br></br> vendor in The
            Unified Endpoint<br></br> Management Landscape, Q3 2023.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SecondSection;
