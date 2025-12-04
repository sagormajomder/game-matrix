import { Link } from "react-router";
import GamesContainer from "../GamesContainer";
import SectionTitle from "../SectionTitle";

export default function LatestGames({ games }) {
  const sortedGames = games.toSorted((game1, game2) => game2.id - game1.id);
  return (
    <section className="my-8 space-y-10 py-14">
      <SectionTitle
        title="Latest Games"
        desc="Stay updated with the newest indie releases"
      />
      <GamesContainer games={sortedGames.slice(0, 4)} />
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
