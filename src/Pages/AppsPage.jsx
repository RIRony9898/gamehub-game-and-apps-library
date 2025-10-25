import { Download, Filter, Search, Smartphone, Star } from "lucide-react";
import { useState } from "react";
import AppsCard from "../Components/AppsPage/AppsCard";
import Container from "../Components/Container";
import useApps from "../Hooks/useApps";
import useTitle from "../Hooks/useTitle";

const AppsPage = () => {
  useTitle("Apps");
  const { apps, loading, error } = useApps();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // Get unique categories
  const categories = ["All", ...new Set(apps.map((app) => app.category))];

  // Filter and sort apps
  const filteredApps = apps
    .filter((app) => {
      const matchesSearch = app.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || app.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return parseFloat(b.ratings) - parseFloat(a.ratings);
        case "downloads":
          return parseFloat(b.downloaded) - parseFloat(a.downloaded);
        case "name":
        default:
          return a.title.localeCompare(b.title);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900/80 to-blue-900">
      <Container>
        {/* Hero Section */}
        <div className="text-center py-16 mb-12">
          <div className="flex items-center justify-center mb-6">
            <Smartphone className="w-12 h-12 text-purple-400 mr-4" />
            <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Apps Collection
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of premium mobile applications
            designed for productivity, entertainment, and creativity. Find the
            perfect app to enhance your digital experience.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-8">
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-purple-300 font-semibold">
                {apps.length}+ Apps
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Download className="w-5 h-5 text-green-400" />
              <span className="text-purple-300 font-semibold">
                Free Downloads
              </span>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 mb-8 mx-2">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search apps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-purple-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-purple-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-purple-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
              >
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="bg-slate-700 text-white"
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-300 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-purple-600/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
              >
                <option value="name" className="bg-slate-700 text-white">
                  Name
                </option>
                <option value="rating" className="bg-slate-700 text-white">
                  Rating
                </option>
                <option value="downloads" className="bg-slate-700 text-white">
                  Downloads
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-base-100">
            Showing{" "}
            <span className="text-purple-400 font-semibold">
              {filteredApps.length}
            </span>{" "}
            of{" "}
            <span className="text-purple-400 font-semibold">{apps.length}</span>{" "}
            apps
            {selectedCategory !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="text-purple-400 font-semibold">
                  {selectedCategory}
                </span>
              </>
            )}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <Smartphone className="w-20 h-20 text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              Failed to Load Apps
            </h3>
            <p className="text-gray-500">Please try refreshing the page.</p>
          </div>
        )}

        {/* Apps Grid */}
        {!loading && !error && (
          <>
            {filteredApps.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-3">
                {filteredApps.map((app) => (
                  <AppsCard key={app.id} app={app} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Search className="w-20 h-20 text-gray-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-400 mb-2">
                  No apps found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default AppsPage;
