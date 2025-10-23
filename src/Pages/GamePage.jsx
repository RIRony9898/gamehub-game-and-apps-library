import Container from "../Components/Container";
import GameCard from "../Components/GamePage/GameCard";
import useGames from "../Hooks/useGames";
import useTitle from "../Hooks/useTitle";

const GamePage = () => {
  useTitle("Games");
  const { games } = useGames();
  return (
    <div>
      <Container>
        {/* page title and subtitle */}
        <div className="text-center my-10 space-y-3">
          <h2 className="text-5xl font-bold">Best Game Collection</h2>
          <p className="text-xl">
            Explore All our premium games for every kind of Gamers
          </p>
        </div>
        {/* games cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default GamePage;
