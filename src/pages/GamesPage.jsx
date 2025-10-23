import { useState } from "react";
import { useLoaderData } from "react-router";
import GamesContainer from "../components/GamesContainer";
import GamesHeading from "../components/GamesHeading";
import SectionTitle from "../components/SectionTitle";

export default function GamesPage() {
  const games = useLoaderData();
  const [search, setSearch] = useState("");
  const [totalGames, setTotalGames] = useState(games.length);

  console.log(games, search, totalGames);

  return (
    <>
      <title>Game Matrix - Games</title>
      <section className="space-y-10 py-14">
        <SectionTitle
          title="Games"
          desc="Explore unique indie games crafted by passionate developers worldwide"
        />
        {/* Search and Title */}
        <GamesHeading
          totalGames={totalGames}
          search={search}
          onSearch={setSearch}
        />
        {/* Apps Container */}
        <GamesContainer
          games={games}
          search={search}
          onTotalGames={setTotalGames}
        />
      </section>
    </>
  );
}
