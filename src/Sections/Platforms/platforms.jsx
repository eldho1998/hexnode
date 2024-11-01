import "./platforms.css";
import { useState } from "react";

const Platform = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("Android");

  const platformDetails = {
    Android: {
      content: (
        <div className="contents">
          <h2>Android</h2>
          <p>
            Remotely deploy, manage, monitor, and secure Android devices in your
            organization. Set compliance benchmarks and leverage Android
            Enterprise to its full capabilities.
          </p>
          <h3>Try Hexnode on your endpoints</h3>
        </div>
      ),
      imageClass: "image1",
    },
    iOS: {
      content: (
        <div className="contents">
          <h2>iOS</h2>
          <p>
            Manage and secure iOS devices within your organization seamlessly.
          </p>
          <h3>Discover Hexnode for iOS management</h3>
        </div>
      ),
      imageClass: "image2",
    },
    macOS: {
      content: (
        <div className="contents">
          <h2>macOS</h2>
          <p>Effortlessly manage macOS endpoints across your network.</p>
          <h3>Get started with macOS endpoint management</h3>
        </div>
      ),
      imageClass: "image3",
    },
    Windows: {
      content: (
        <div className="contents">
          <h2>Windows</h2>
          <p>Manage Windows devices with powerful policy controls.</p>
          <h3>Try Hexnode for Windows management</h3>
        </div>
      ),
      imageClass: "image4",
    },
    tvOS: {
      content: (
        <div className="contents">
          <h2>tvOS</h2>
          <p>Deploy and manage Apple TV devices easily within your network.</p>
          <h3>Learn more about tvOS support</h3>
        </div>
      ),
      imageClass: "image5",
    },
    FireOS: {
      content: (
        <div className="contents">
          <h2>FireOS</h2>
          <p>Secure and monitor Amazon FireOS devices in your organization.</p>
          <h3>Explore FireOS management with Hexnode</h3>
        </div>
      ),
      imageClass: "image6",
    },
  };

  return (
    <div className="platform">
      <div className="platform-headers">
        <div className="platform-head1">
          <h1>Multi-platform Endpoint Management</h1>
          <p>
            Devices of varying platforms? Hexnode thrives in a diverse
            environment.
          </p>
        </div>
      </div>

      <div className="platform-types">
        <div className="platform-image">
          <div
            className={platformDetails[selectedPlatform].imageClass}
            id="images"
          ></div>
        </div>

        <div className="platformNames">
          {Object.entries(platformDetails).map(([key, { content }]) => (
            <div
              key={key}
              className={`platform-option ${
                selectedPlatform === key ? "active" : ""
              }`}
              onClick={() => setSelectedPlatform(key)}
            >
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
