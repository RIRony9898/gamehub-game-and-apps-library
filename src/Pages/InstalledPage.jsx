import React, { useContext, useEffect, useState } from "react";
import Container from "../Components/Container";
import { InstallationContext } from "../context/installationContextObject";
import { toast } from "react-toastify";
import InstalledAppsCard from "../Components/InstalledPage/InstalledAppsCard";
import useTitle from "../Hooks/useTitle";

const InstalledPage = () => {
    useTitle("Installed");
  const { installedApps, uninstallApp } = useContext(InstallationContext);
  const [sortedApps, setSortedApps] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); 

  console.log("Installed apps in InstalledPage:", installedApps);

  const parseDownloads = (downloads) => {
    const num = parseFloat(downloads);
    if (downloads.toUpperCase().includes('M')) {
      return num * 1000000;
    }
    if (downloads.toUpperCase().includes('K')) {
      return num * 1000;
    }
    return num;
  };

  useEffect(() => {
    let sorted = [...installedApps];
    if (sortOrder === "asc") {
      sorted.sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
    } else if (sortOrder === "desc") {
      sorted.sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
    }
    setSortedApps(sorted);
  }, [installedApps, sortOrder]);

  const handleUninstall = (appId, appName) => {
    uninstallApp(appId);
    toast.error(`${appName} uninstalled successfully!`);
  };

  return (
    <div>
      <Container>
        {/* page title and subtitle */}
        <div className="text-center my-10 space-y-3">
          <h2 className="text-5xl font-bold">Your Installed Apps</h2>
          <p className="text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {/* found apps count and sort box */}
        <div className="flex justify-between items-center">
          <h5 className="text-2xl font-semibold">
            Installed Apps{" "}
            <span className="text-lg text-gray-400">
              ({installedApps.length})
            </span>
          </h5>
          {/* sort box */}
          <div className="dropdown">
            <button
              className="btn"
            >
              Sort By Download
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => setSortOrder("asc")}>Low -{`>`} High</a>
              </li>
              <li>
                <a onClick={() => setSortOrder("desc")}>High -{`>`} Low</a>
              </li>
            </ul>
          </div>
        </div>

        {/* installed apps list */}
        <div className="flex flex-col gap-6 my-10">
          {sortedApps.length > 0 ? (
            sortedApps.map((app) => (
              <InstalledAppsCard key={app.id} app={app} onUninstall={handleUninstall} />
            ))
          ) : (
            <p className="text-center text-xl text-gray-500">No apps installed yet.</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default InstalledPage;
