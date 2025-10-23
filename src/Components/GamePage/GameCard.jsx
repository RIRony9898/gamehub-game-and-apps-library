import { Download, Star } from "lucide-react";
import { Link } from "react-router";

const GameCard = ({ game }) => {
  const { title, coverPhoto, downloaded, ratings } = game;
  return (
    <Link to={`/game/${game.id}`}>
      <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden transform hover:scale-105">
        <figure className="h-48 w-full bg-gray-100 flex items-center justify-center p-4">
          <img
            className="max-h-full max-w-full object-contain"
            src={coverPhoto}
            alt={title}
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-xl font-bold text-gray-800 truncate">
            {title}
          </h2>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center text-blue-600 font-semibold">
              <Download className="w-5 h-5 mr-1" />
              <span>{downloaded}</span>
            </div>
            <div className="flex items-center text-yellow-500 font-semibold">
              <Star className="w-5 h-5 mr-1 fill-current" />
              <span>{ratings}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
