import { Download, Star, Trash2 } from "lucide-react";

const InstalledAppsCard = ({ app, onUninstall }) => {
  return (
    <div className="bg-slate-200 shadow-lg rounded-lg overflow-hidden w-full transition-all duration-300 hover:shadow-2xl flex flex-col sm:flex-row sm:items-center ">
      {/* app image */}
      <figure className="w-full h-48 sm:w-40 sm:h-40 flex-shrink-0 p-5">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-contain"
        />
      </figure>

      {/* Card Body */}
      <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between flex-grow w-full gap-4">
        <div className="flex-grow">
          {/* App Title */}
          <h2 className="card-title text-xl lg:text-2xl font-bold mb-2">
            {app.title}
          </h2>

          {/* App Info */}
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-sm text-slate-700">
            <div className="flex items-center text-blue-600 font-semibold">
              <Download className="w-5 h-5 mr-1" />
              <span>{app.downloads}</span>
            </div>
            <div className="flex items-center text-yellow-500 font-semibold">
              <Star className="w-5 h-5 mr-1 fill-current" />
              <span>{app.ratingAvg}</span>
            </div>
            <span>{app.size}</span>
          </div>
        </div>

        {/* Uninstall Button */}
        <div className="card-actions flex-shrink-0 self-end sm:self-center">
          <button
            onClick={() => onUninstall(app.id, app.title)}
            className="btn btn-outline btn-error btn-sm gap-2"
          >
            <Trash2 size={16} />
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};


export default InstalledAppsCard;
