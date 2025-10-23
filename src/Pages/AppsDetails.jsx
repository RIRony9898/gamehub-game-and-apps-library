import { Download, Star } from "lucide-react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import useTitle from "../Hooks/useTitle";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((a) => a.id === id);

  useTitle(app ? app.title : "App Details");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">App not found</div>
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
  } = app;

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

export default AppsDetails;
