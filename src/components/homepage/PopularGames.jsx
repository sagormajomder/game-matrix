import { Link } from "react-router";
import GamesContainer from "../GamesContainer";
import SectionTitle from "../SectionTitle";

export default function PopularGames({ games }) {
  const sortedGames = games.toSorted(
    (game1, game2) => game2.ratings - game1.ratings,
  );
  return (
    <section className="my-8 space-y-10 py-14">
      <SectionTitle
        title="Popular Games"
        desc="Explore trending games loved by gamers, ready to play"
      />
      <GamesContainer games={sortedGames} />
      <div className="-mt-4 text-center">
        <Link
          className="btn btn-primary max-w-fit px-8 text-center"
          to="/games"
        >
          Show All
        </Link>
      </div>
    </section>
  );
}
