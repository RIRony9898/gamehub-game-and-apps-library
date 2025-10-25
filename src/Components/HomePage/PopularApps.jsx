import { Smartphone } from "lucide-react";
import Marquee from "react-fast-marquee";
import useApps from "../../Hooks/useApps";
import AppsCard from "../AppsPage/AppsCard";

const PopularApps = () => {
  const { apps, loading, error } = useApps();

  // Sort apps by rating and take top 10
  const popularApps = apps
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 10);

  return (
    <section
      aria-label="Popular apps"
      className="my-12 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Smartphone className="w-8 h-8 text-purple-400 mr-3" />
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Popular Apps
            </h3>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the most downloaded and highly-rated mobile applications.
            From productivity tools to entertainment apps, find your next
            favorite.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400 text-lg">
              Failed to load apps. Please try again later.
            </p>
          </div>
        )}

        {!loading && popularApps.length > 0 && (
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

            <Marquee
              pauseOnHover
              pauseOnClick
              gradient={false}
              speed={45}
              direction="right"
              aria-label="Scrolling popular apps"
              className="py-4"
            >
              {popularApps.map((app, index) => (
                <div
                  className="min-w-[280px] flex-shrink-0 px-3"
                  key={app.id}
                  role="listitem"
                >
                  <div className="relative group">
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-20 shadow-lg">
                      {index + 1}
                    </div>
                    <AppsCard app={app} />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        )}

        {!loading && popularApps.length === 0 && (
          <div className="text-center py-12">
            <Smartphone className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              No apps available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularApps;
