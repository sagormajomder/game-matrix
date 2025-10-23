import { useLoaderData } from "react-router";
import Banner from "../components/homepage/Banner";

export default function HomePage() {
  const data = useLoaderData();
  return (
    <>
      <Banner games={data.slice(0, 5)} />
    </>
  );
}
