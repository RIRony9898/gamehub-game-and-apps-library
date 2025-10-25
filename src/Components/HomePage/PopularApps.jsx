import Marquee from "react-fast-marquee";
import useApps from "../../Hooks/useApps";
import AppsCard from "../AppsPage/AppsCard";

const PopularApps = () => {
  const { apps, loading, error } = useApps();

  return (
    <section aria-label="Popular apps" className="my-8">
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-2xl font-bold">Popular Apps</h3>
      </div>

      {loading && <p>Loading apps…</p>}
      {error && <p className="text-red-600">Failed to load apps.</p>}

      {!loading && apps.length > 0 && (
        <div className="relative">
          <Marquee
            pauseOnHover
            pauseOnClick
            gradient={false}
            speed={40}
            direction="right"
            aria-label="Scrolling popular apps"
            className="py-2"
          >
            {apps.map((app) => (
              <div
                className="min-w-[220px] flex-shrink-0 px-2"
                key={app.id}
                role="listitem"
              >
                <AppsCard app={app} />
              </div>
            ))}
          </Marquee>
        </div>
      )}
    </section>
  );
};

export default PopularApps;
