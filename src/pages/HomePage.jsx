import { useLoaderData } from "react-router";
import Banner from "../components/homepage/Banner";
import GameCategories from "../components/homepage/GameCategories";
import GameOfTheWeek from "../components/homepage/GameOfTheWeek";
import Newsletter from "../components/homepage/Newsletter";
import PopularGames from "../components/homepage/PopularGames";

export default function HomePage() {
  const data = useLoaderData();
  return (
    <>
      <Banner games={data.slice(0, 5)} />
      <GameCategories />
      <PopularGames games={data.slice(0, 4)} />
      <GameOfTheWeek />
      <Newsletter />
    </>
  );
}
