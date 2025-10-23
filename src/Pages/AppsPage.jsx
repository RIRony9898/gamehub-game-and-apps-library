import useApps from "../Hooks/useApps";
import AppsCard from "../Components/AppsPage/AppsCard";
import Container from "../Components/Container";
import useTitle from "../Hooks/useTitle";

const AppsPage = () => {
  useTitle("Apps");
  const { apps } = useApps();
  return (
    <div>
      <Container>
        {/* page title and subtitle */}
        <div className="text-center my-10 space-y-3">
          <h2 className="text-5xl font-bold">Best Apps Collection</h2>
          <p className="text-xl">
            Explore All our premium Apps for every kind of Users
          </p>
        </div>
        {/* apps cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          {apps.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AppsPage;
