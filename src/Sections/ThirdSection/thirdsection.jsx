import "./thirdsection.css";

const ThirdSection = () => {
  return (
    <div className="thirdSection">
      <div className="thirdSectionHeader">
        <h1>Why Hexnode?</h1>
      </div>
      <div className="cards">
        <div className="thirdSectionfirst">
          <div className="card1">
            <div className="third-head">
              <h3>Adapt to the new normal</h3>
            </div>
            <div className="third-content">
              <p>
                Hybrid, remote or onsite, you can trust Hexnode <br></br>UEM to
                deliver. Create policies that cater to your<br></br>
                organization’s protocols. Whether it be BYOD, <br></br>COPE, or
                platform limited, Hexnode can <br></br>manage it all.
              </p>
            </div>
          </div>
          <div className="card2">
            <div className="third-head">
              <h3>
                Get more done with
                <br /> automation
              </h3>
            </div>
            <div className="third-content">
              <p>
                Hexnode UEM automation features help free up
                <br /> IT’s time spent on mundane and repetitive
                <br /> tasks. Do hours’ worth of work in a few <br />
                minutes.
              </p>
            </div>
          </div>
        </div>
        <div className="flow">
          <h1>Flow</h1>
        </div>

        <div className="third-SectionSecond">
          <div className="card3">
            <div className="third-head">
              <h3>Zero compromise security</h3>
            </div>
            <div className="third-content">
              <p>
                Enable full-fledged device encryption, data loss<br></br>
                prevention, and all-rounded device security <br></br>with
                Hexnode UEM. Be at the bleeding edge of <br></br>device security
                without any compromises.
              </p>
            </div>
          </div>
          <div className="card4">
            <div className="third-head">
              <h3>Unified Policy Management</h3>
            </div>
            <div className="third-content">
              <p>
                Create a single policy through Hexnode and <br />
                apply it on all the devices in your organization. <br />
                Any platform or form factor, achive single pane
                <br /> of glass management with Hexnode.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
