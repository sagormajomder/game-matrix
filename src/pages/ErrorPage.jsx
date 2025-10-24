import { Link, useRouteError } from "react-router";
import noPageFoundImage from "../assets/error-404.png";
import SectionTitle from "../components/SectionTitle";
export default function ErrorPage() {
  const error = useRouteError();
  const title = error ? error?.message : "Oops, page not found!";
  const desc = error
    ? "The Game you are requesting is not found on our system. Please try another game."
    : "The page you are looking for is not available.";

  return (
    <>
      <title>Game Matrix - 404 page not found</title>
      <section className="py-14">
        <div className="flex flex-col items-center gap-14">
          <figure className="overflow-hidden">
            <img
              className="h-62.5"
              src={noPageFoundImage}
              alt="No Page Found"
            />
          </figure>
          <SectionTitle title={title} desc={desc} />

          <Link to="/" className="btn btn-primary -mt-10">
            &larr; Go Back!
          </Link>
        </div>
      </section>
    </>
  );
}
