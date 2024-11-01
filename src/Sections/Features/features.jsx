import "./features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="features-head">
        <h1>
          Powerful endpoint management, built for
          <br />
          <span className="second-line">the devices you choose</span>
        </h1>
      </div>
      <div className="features-card">
        <div className="st">
          <div className="first-card">
            <div className="im1"></div>
            <h1>Zero-touch Enrollment</h1>
            <p>
              Onboard endpoints and users with minimal
              <br /> user intervention. Provision devices and set
              <br /> up configurations well before the user gets <br />
              their hands on.
            </p>
          </div>

          <div className="first-card">
            <div className="im2"></div>
            <h1>Automation</h1>
            <p>
              Automate endpoint compliance with dynamic <br />
              grouping and breeze through day-to-day IT tasks <br />
              with scripting capabilities. Hexnode also allows the
              <br /> creation of automated reports.
            </p>
          </div>

          <div className="first-card">
            <div className="im3"></div>
            <h1>
              Remote Access <br />
              Management
            </h1>
            <p>
              Hexnode UEM enables the enterprise to manage <br />
              every single device in the corporate ecosystem for <br />
              optimal and secure operation.
            </p>
          </div>
        </div>

        <div className="nd">
          <div className="first-card">
            <div className="im4"></div>
            <h1>Endpoint Security and Compliance</h1>
            <p>
              Hexnode helps you maintain compliance with <br />
              international regulatory bodies and set up custom <br />
              rules for compliance within your business for <br />
              security purposes.
            </p>
          </div>

          <div className="first-card">
            <div className="im5"></div>
            <h1>Integrations</h1>
            <p>
              Hexnodes various integrations make it easy to fit
              <br /> into your current endpoint ecosystem. These
              <br /> integrations include Azure AD, Okta, Android <br />
              Enterprise, Apple School and Business manager, <br />
              and many more enterprise and technology <br />
              integrations.
            </p>
          </div>

          <div className="first-card">
            <div className="im6"></div>
            <h1>App Management</h1>
            <p>
              Set up a bespoke app store, enable mandatory <br /> apps, and
              ensure endpoints come equipped with all <br />
              the required applications, custom enterprise apps <br />
              included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
