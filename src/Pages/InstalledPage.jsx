import {
  ArrowUpDown,
  Filter,
  Gamepad2,
  Package,
  Smartphone,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Container from "../Components/Container";
import InstalledAppsCard from "../Components/InstalledPage/InstalledAppsCard";
import { InstallationContext } from "../context/installationContextObject";
import useTitle from "../Hooks/useTitle";

const InstalledPage = () => {
  useTitle("Installed");
  const { installedApps, uninstallApp } = useContext(InstallationContext);
  const [sortedApps, setSortedApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [sortBy, setSortBy] = useState("name");

  console.log("Installed apps in InstalledPage:", installedApps);

  const parseDownloads = (downloads) => {
    const num = parseFloat(downloads);
    if (downloads.toUpperCase().includes("M")) {
      return num * 1000000;
    }
    if (downloads.toUpperCase().includes("K")) {
      return num * 1000;
    }
    return num;
  };

  useEffect(() => {
    let sorted = [...installedApps];
    if (sortBy === "downloads") {
      if (sortOrder === "asc") {
        sorted.sort(
          (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
        );
      } else if (sortOrder === "desc") {
        sorted.sort(
          (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
        );
      }
    } else if (sortBy === "rating") {
      if (sortOrder === "asc") {
        sorted.sort(
          (a, b) => parseFloat(a.ratingAvg) - parseFloat(b.ratingAvg)
        );
      } else if (sortOrder === "desc") {
        sorted.sort(
          (a, b) => parseFloat(b.ratingAvg) - parseFloat(a.ratingAvg)
        );
      }
    } else if (sortBy === "name") {
      if (sortOrder === "asc") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOrder === "desc") {
        sorted.sort((a, b) => b.title.localeCompare(a.title));
      }
    }
    setSortedApps(sorted);
  }, [installedApps, sortOrder, sortBy]);

  const handleUninstall = (appId, appName) => {
    uninstallApp(appId);
    toast.error(`${appName} uninstalled successfully!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900/80 to-blue-900">
      <Container>
        {/* Hero Section */}
        <div className="text-center py-16 mb-12">
          <div className="flex items-center justify-center mb-6">
            <Package className="w-12 h-12 text-purple-400 mr-4" />
            <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Installed Apps
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Manage your installed applications. View details, check for updates,
            and uninstall apps you no longer need.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-8">
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Smartphone className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-semibold">
                {installedApps.length} Apps Installed
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Gamepad2 className="w-5 h-5 text-green-400" />
              <span className="text-purple-300 font-semibold">
                Gaming Ready
              </span>
            </div>
          </div>
        </div>

        {/* Stats and Sort Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 mb-8 mx-2">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Stats */}
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">
                  {installedApps.length}
                </div>
                <p className="text-gray-300 text-sm">Total Apps</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">
                  {installedApps
                    .reduce(
                      (acc, app) => acc + parseDownloads(app.downloads),
                      0
                    )
                    .toLocaleString()}
                </div>
                <p className="text-gray-300 text-sm">Total Downloads</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">
                  {(
                    installedApps.reduce(
                      (acc, app) => acc + parseFloat(app.ratingAvg),
                      0
                    ) / Math.max(installedApps.length, 1)
                  ).toFixed(1)}
                </div>
                <p className="text-gray-300 text-sm">Avg Rating</p>
              </div>
            </div>

            {/* Sort Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-purple-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-slate-700/50 border border-purple-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                >
                  <option value="name" className="bg-slate-700 text-white">
                    Name
                  </option>
                  <option value="downloads" className="bg-slate-700 text-white">
                    Downloads
                  </option>
                  <option value="rating" className="bg-slate-700 text-white">
                    Rating
                  </option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <ArrowUpDown className="w-5 h-5 text-purple-400" />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="px-4 py-2 bg-slate-700/50 border border-purple-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                >
                  <option value="" className="bg-slate-700 text-white">
                    Default
                  </option>
                  <option value="asc" className="bg-slate-700 text-white">
                    Ascending
                  </option>
                  <option value="desc" className="bg-slate-700 text-white">
                    Descending
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {installedApps.length === 0 && (
          <div className="text-center py-20">
            <Package className="w-20 h-20 text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              No Apps Installed
            </h3>
            <p className="text-gray-500">
              Start exploring and installing apps from our collection.
            </p>
          </div>
        )}

        {/* Installed Apps List */}
        {sortedApps.length > 0 && (
          <div className="space-y-6 p-3">
            {sortedApps.map((app) => (
              <div
                key={app.id}
                className="bg-slate-800/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-200"
              >
                <InstalledAppsCard app={app} onUninstall={handleUninstall} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default InstalledPage;
