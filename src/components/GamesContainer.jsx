import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import ratingsIcon from "../assets/icon-ratings.png";
import GameNotFound from "./GameNotFound";

export default function GamesContainer({
  games,
  search = "",
  onTotalGames = () => {},
}) {
  const [loading, setLoading] = useState(true);

  let filterGames = games.filter((game) =>
    game.title
      .toLowerCase()
      .includes(search.replace(/\s+/g, " ").trim().toLowerCase()),
  );

  useEffect(function () {
    setLoading(true);
    setTimeout(() => {
      filterGames = games.filter((game) =>
        game.title
          .toLowerCase()
          .includes(search.replace(/\s+/g, " ").trim().toLowerCase()),
      );
      setLoading(false);
    }, 600);
  }, []);

  useEffect(
    function () {
      onTotalGames(filterGames.length);
    },
    [filterGames.length],
  );

  // Search Loading
  if (loading && search) {
    return (
      <div className="flex justify-center py-10">
        <p className="loading loading-spinner text-accent loading-xl"></p>
      </div>
    );
  }

  if (filterGames.length === 0) {
    return <GameNotFound message="No Game Found" />;
  }

  return (
    <div className="xs:grid-cols-2 grid grid-cols-1 gap-8 md:grid-cols-3">
      {filterGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

function GameCard({ game }) {
  const { coverPhoto, title, ratings, id } = game;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-base-200 rounded-md border border-gray-800"
    >
      <Link to={`/game-details/${id}`}>
        <figure className="overflow-hidden rounded-t-lg max-[38.125rem]:w-full">
          <img
            className="h-48 w-full rounded-t-lg object-cover"
            src={coverPhoto}
            alt={title}
          />
        </figure>
        <div className="flex flex-col justify-between gap-4 p-4">
          <h5 className="heading-5">{title}</h5>
          <div className="flex items-center justify-between">
            {/* <div className="flex items-center gap-1 rounded-sm bg-[#F1F5E8] px-2 py-1">
          <img className="h-4" src={downloadIcon} alt="Download Icon" />
          <p className="text-[#00D390]">{formatLargeNumber(downloads)}</p>
        </div> */}
            <div className="flex items-center gap-1 rounded-sm bg-[#FFF0E1] px-2 py-1">
              <img className="h-4" src={ratingsIcon} alt="Rating Icon" />
              <p className="text-[#FF8811]">{ratings}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
