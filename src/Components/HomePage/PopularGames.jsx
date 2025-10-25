import { Gamepad2, TrendingUp } from "lucide-react";
import Marquee from "react-fast-marquee";
import useGames from "../../Hooks/useGames";
import GameCard from "../GamePage/GameCard";

const PopularGames = () => {
  const { games, loading, error } = useGames();

  // Sort games by rating and take top 10
  const popularGames = games
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 10);

  return (
    <section
      aria-label="Popular games"
      className="my-12 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 text-purple-400 mr-3" />
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Popular Games
            </h3>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the most loved games by our community. These top-rated
            titles offer incredible experiences and endless entertainment.
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
              Failed to load games. Please try again later.
            </p>
          </div>
        )}

        {!loading && popularGames.length > 0 && (
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

            <Marquee
              pauseOnHover
              pauseOnClick
              gradient={false}
              speed={50}
              aria-label="Scrolling popular games"
              className="py-4"
            >
              {popularGames.map((game, index) => (
                <div
                  className="min-w-[280px] flex-shrink-0 px-3"
                  key={game.id}
                  role="listitem"
                >
                  <div className="relative group">
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-20 shadow-lg">
                      {index + 1}
                    </div>
                    <GameCard game={game} />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        )}

        {!loading && popularGames.length === 0 && (
          <div className="text-center py-12">
            <Gamepad2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              No games available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularGames;
