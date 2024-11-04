import "./platforms.css";
import { useState } from "react";

const Platform = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("Android");
  const [expandedPlatform, setExpandedPlatform] = useState("Android");

  const platformDetails = {
    Android: {
      title: "Android",
      description:
        "Remotely deploy, manage, monitor, and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
      heading: "Try Hexnode on your endpoints",
      imageClass: "image1",
    },
    iOS: {
      title: "iOS",
      description:
        "Manage and secure iOS devices within your organization seamlessly.",
      heading: "Discover Hexnode for iOS management",
      imageClass: "image2",
    },
    macOS: {
      title: "macOS",
      description: "Effortlessly manage macOS endpoints across your network.",
      heading: "Get started with macOS endpoint management",
      imageClass: "image3",
    },
    Windows: {
      title: "Windows",
      description: "Manage Windows devices with powerful policy controls.",
      heading: "Try Hexnode for Windows management",
      imageClass: "image4",
    },
    tvOS: {
      title: "tvOS",
      description:
        "Deploy and manage Apple TV devices easily within your network.",
      heading: "Learn more about tvOS support",
      imageClass: "image5",
    },
    FireOS: {
      title: "FireOS",
      description:
        "Secure and monitor Amazon FireOS devices in your organization.",
      heading: "Explore FireOS management with Hexnode",
      imageClass: "image6",
    },
  };

  const handlePlatformClick = (key) => {
    setSelectedPlatform(key);
    setExpandedPlatform(expandedPlatform === key ? null : key);
    console.log(`Selected: ${key}, Expanded: ${expandedPlatform}`);
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
      <div className="parent">
        <div className="platform-types">
          <div className="platform-image">
            <div
              className={platformDetails[selectedPlatform].imageClass}
              id="images"
            ></div>
          </div>
          <div className="platformNames">
            {Object.entries(platformDetails).map(
              ([key, { title, description, heading }]) => (
                <div
                  key={key}
                  className={`platform-option ${
                    selectedPlatform === key ? "active" : ""
                  }`}
                  onClick={() => handlePlatformClick(key)}
                >
                  <div className="contents">
                    <h2>{title}</h2>
                    {expandedPlatform === key && (
                      <>
                        <p>{description}</p>
                        <h3>{heading}</h3>
                      </>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
