import './firstsection.css';

const FirstSection = () => {
  return (
    <div className="firstsection">
      <div className="firstSection1st">
        <div className="unified">
          <p>Unified Endpoint Management</p>
        </div>
        <div className="gain">
          <p>
            Gain control and visibility<br></br> over your endpoints
          </p>
        </div>
        <div className="hexnodes">
          <p>
            Hexnode's UEM solution allows you to simplify endpoint <br></br>
            management and free up IT. Focus on the big picture while <br></br>
            Hexnode works on the details.
          </p>
        </div>
        <div className="emailbutton">
          <input type="email" placeholder="Email" />
          <button className="nav-second">LET'S TRY IT OUT!</button>
        </div>
      </div>
      <div className="firstSection2nd"></div>
    </div>
  );
};

export default FirstSection;
