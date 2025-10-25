import Marquee from "react-fast-marquee";
import useGames from "../../Hooks/useGames";
import GameCard from "../GamePage/GameCard";

const PopularGames = () => {
  const { games, loading, error } = useGames();

  return (
    <section aria-label="Popular games" className="my-8">
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-2xl font-bold">Popular Games</h3>
      </div>

      {loading && <p>Loading games…</p>}
      {error && <p className="text-red-600">Failed to load games.</p>}

      {!loading && games.length > 0 && (
        <div className="relative">
          <Marquee
            pauseOnHover
            pauseOnClick
            gradient={false}
            speed={40}
            aria-label="Scrolling popular games"
            className="py-2"
          >
            {games.map((game) => (
              <div
                className="min-w-[220px] flex-shrink-0 px-2"
                key={game.id}
                role="listitem"
              >
                <GameCard game={game} />
              </div>
            ))}
          </Marquee>
        </div>
      )}
    </section>
  );
};

export default PopularGames;
