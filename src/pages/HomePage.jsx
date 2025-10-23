import { useLoaderData } from "react-router";
import Banner from "../components/homepage/Banner";
import PopularGames from "../components/homepage/PopularGames";

export default function HomePage() {
  const data = useLoaderData();
  return (
    <>
      <Banner games={data.slice(0, 5)} />
      <PopularGames games={data.slice(0, 6)} />
    </>
  );
}
