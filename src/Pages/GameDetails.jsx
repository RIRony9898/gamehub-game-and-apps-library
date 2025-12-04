import { Download, Star } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import InstallButtonAnimation from "../Components/animation/InstallButtonAnimation";
import {
  StyledInstallButton,
  TriggerEdge,
  TriggerLabel,
  TriggerShadow,
} from "../Components/animation/StyledInstallButton";
import { InstallationContext } from "../context/installationContextObject";
import useGames from "../Hooks/useGames";
import useTitle from "../Hooks/useTitle";
import { AuthContext } from "../AuthContexts/AuthContext";

const GameDetails = () => {
  const { id } = useParams();
  const { games, loading } = useGames();
  const game = games.find((g) => g.id === id);
  const { installApp, installedApps } = useContext(InstallationContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showInstallModal, setShowInstallModal] = useState(false);

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
    if (!user) {
      toast.error("Login first to install");
      navigate("/login");
      return;
    }
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
    setShowInstallModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-fade-in">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Image Section */}
              <div className="lg:col-span-1 relative">
                <div className="h-96 lg:h-full overflow-hidden rounded-l-3xl">
                  <img
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                    src={coverPhoto}
                    alt={title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-l-3xl"></div>
                </div>
              </div>

              {/* Details Section */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                      {title}
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center bg-yellow-500/20 rounded-full px-4 py-2">
                      <Star className="w-5 h-5 mr-2 text-yellow-400 fill-current" />
                      <span className="font-semibold text-yellow-400">
                        {ratings}
                      </span>
                    </div>
                    <div className="flex items-center bg-blue-500/20 rounded-full px-4 py-2">
                      <Download className="w-5 h-5 mr-2 text-blue-400" />
                      <span className="font-semibold text-blue-400">
                        {downloaded}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-gray-400 text-sm font-medium mb-1">
                        Category
                      </p>
                      <p className="text-white font-semibold">{category}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-gray-400 text-sm font-medium mb-1">
                        Developer
                      </p>
                      <p className="text-white font-semibold">{developer}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-gray-400 text-sm font-medium mb-1">
                        Size
                      </p>
                      <p className="text-white font-semibold">{size}</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <StyledInstallButton
                      onClick={handleInstall}
                      disabled={isInstalled}
                      className="transition-transform duration-200 hover:scale-105"
                    >
                      <TriggerShadow />
                      <TriggerEdge />
                      <TriggerLabel>
                        {isInstalled ? "Installed" : "Install Now"}
                      </TriggerLabel>
                    </StyledInstallButton>
                    <a
                      href={googlePlayLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Google Play
                    </a>
                    <a
                      href={appleStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Apple Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InstallButtonAnimation
        isOpen={showInstallModal}
        onClose={() => setShowInstallModal(false)}
      />
    </div>
  );
};

export default GameDetails;
