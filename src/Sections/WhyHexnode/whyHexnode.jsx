import './whyHexnode.css';

const WhyHexnode = () => {
  return (
    <div className="thirdSection">
      <div className="why">
        <div className="thirdSectionHeader">
          <h1>Why Hexnode?</h1>
        </div>
        <div className="cards">
          <div className="thirdSectionfirst">
            <div className="card1">
              <div className="third-head">
                <div className="img1"></div>
                <h2>Adapt to the new normal</h2>
              </div>
              <div className="third-content">
                <p>
                  Hybrid, remote or onsite, you can trust Hexnode <br></br>UEM
                  to deliver. Create policies that cater to your<br></br>
                  organization’s protocols. Whether it be BYOD, <br></br>COPE,
                  or platform limited, Hexnode can <br></br>manage it all.
                </p>
                <h4 className="hover-text">Try Hexnode on your endpoints</h4>
              </div>
            </div>
            <div className="card2">
              <div className="third-head">
                <div className="img2"></div>
                <h2>Get more done with automation</h2>
              </div>
              <div className="third-content">
                <p>
                  Hexnode UEM automation features help free up
                  <br /> IT’s time spent on mundane and repetitive
                  <br /> tasks. Do hours’ worth of work in a few <br />
                  minutes.
                </p>
                <h4 className="hover-text">Try Hexnode on your endpoints</h4>
              </div>
            </div>
          </div>
          <div className="flow"></div>
          <div className="flow-line">
            <div className="flow-arrow"></div>
          </div>

          <div className="third-SectionSecond">
            <div className="card3">
              <div className="third-head">
                <div className="img3"></div>
                <h2>Zero compromise security</h2>
              </div>
              <div className="third-content">
                <p>
                  Enable full-fledged device encryption, data loss<br></br>
                  prevention, and all-rounded device security <br></br>with
                  Hexnode UEM. Be at the bleeding edge of <br></br>device
                  security without any compromises.
                </p>
                <h4 className="hover-text">Try Hexnode on your endpoints</h4>
              </div>
            </div>
            <div className="card4">
              <div className="third-head">
                <div className="img4"></div>
                <h2>Unified Policy Management</h2>
              </div>
              <div className="third-content">
                <p>
                  Create a single policy through Hexnode and <br />
                  apply it on all the devices in your organization. <br />
                  Any platform or form factor, achive single pane
                  <br /> of glass management with Hexnode.
                </p>
                <h4 className="hover-text">Try Hexnode on your endpoints</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHexnode;
