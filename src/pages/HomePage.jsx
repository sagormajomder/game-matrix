import { useLoaderData } from "react-router";
import Banner from "../components/homepage/Banner";
import GameCategories from "../components/homepage/GameCategories";
import Newsletter from "../components/homepage/Newsletter";
import PopularGames from "../components/homepage/PopularGames";

export default function HomePage() {
  const data = useLoaderData();
  return (
    <>
      <Banner games={data.slice(0, 5)} />
      <PopularGames games={data.slice(0, 6)} />
      <GameCategories />
      <Newsletter />
    </>
  );
}
