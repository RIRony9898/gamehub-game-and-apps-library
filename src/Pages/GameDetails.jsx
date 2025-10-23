import { Download, Star } from "lucide-react";
import { useParams } from "react-router";
import useGames from "../Hooks/useGames";
import useTitle from "../Hooks/useTitle";
import { useContext } from "react";
import { InstallationContext } from "../context/installationContextObject";
import { toast } from "react-toastify";

const GameDetails = () => {
  const { id } = useParams();
  const { games, loading } = useGames();
  const game = games.find((g) => g.id === id);
  const { installApp, installedApps } = useContext(InstallationContext);

  const isInstalled = installedApps.some((app) => app.id === game?.id);

  useTitle(game ? game.title : "Game Details");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">Game not found</div>
      </div>
    );
  }

  const {
    title,
    coverPhoto,
    downloaded,
    ratings,
    category,
    developer,
    description,
    size,
    googlePlayLink,
    appleStoreLink,
  } = game;

  const handleInstall = () => {
    const appToInstall = {
      id: game.id,
      image: game.coverPhoto,
      title: game.title,
      downloads: game.downloaded,
      ratingAvg: game.ratings,
      size: game.size,
      userEmail: "", 
    };
    installApp(appToInstall);
    toast.success(`${game.title} installed successfully!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src={coverPhoto}
            alt={title}
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <Star className="w-6 h-6 mr-1 text-yellow-500 fill-current" />
              <span className="font-bold">{ratings}</span>
            </div>
            <div className="flex items-center">
              <Download className="w-6 h-6 mr-1 text-blue-600" />
              <span className="font-bold">{downloaded}</span>
            </div>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-bold">Category:</span> {category}
            </p>
            <p>
              <span className="font-bold">Developer:</span> {developer}
            </p>
            <p>
              <span className="font-bold">Size:</span> {size}
            </p>
          </div>
          <div className="flex">
            <button
              onClick={handleInstall}
              className={`text-white font-bold py-2 px-4 rounded mr-4 ${isInstalled ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
              disabled={isInstalled}
            >
              {isInstalled ? "Installed" : "Install Now"}
            </button>
            <a
              href={googlePlayLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
            >
              Google Play
            </a>
            <a
              href={appleStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            >
              Apple Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;