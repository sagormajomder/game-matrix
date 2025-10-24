import { motion } from "motion/react";
import { FiDownload } from "react-icons/fi";
import { Link, useLoaderData, useParams } from "react-router";
import ratingsIcon from "../assets/icon-ratings.png";

export default function GameDetailsPage() {
  const games = useLoaderData();
  const { id } = useParams();

  const game = games.find((game) => game.id === +id);
  if (!game) throw new Error("OPPS!! GAME NOT FOUND");

  const {
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = game;

  return (
    <>
      <title>{`Game Matrix - ${title}`}</title>

      <section className="flex h-full items-center justify-center py-14">
        <div className="space-y-10 rounded-xl border border-gray-800 p-6">
          <div className="flex flex-col gap-10 sm:flex-row">
            <figure className="basis-1/2 overflow-hidden rounded-md md:basis-1/3">
              <img
                className="h-full rounded-md object-cover"
                src={coverPhoto}
                alt={title}
              />
            </figure>
            {/* Overview Content */}
            <div className="basis-1/2 space-y-5 md:basis-2/3">
              {/* Basic Overview */}
              <div className="">
                <h3 className="heading-3">{title}</h3>
                <p className="text-lg md:text-xl">
                  Developed by{" "}
                  <span className="text-accent font-semibold">{developer}</span>
                </p>
              </div>
              {/* Details Overview */}
              <div className="bg-base-200 xs:flex-row xs:gap-4 flex max-w-full flex-col justify-between gap-6 rounded-lg border border-gray-800 p-3 text-base sm:max-w-full sm:flex-col sm:justify-start sm:text-sm md:max-w-fit md:flex-row md:gap-16 md:text-base">
                {/* Ratings */}
                <div className="space-y-1.5">
                  <p className="max-w-max">Average Ratings</p>
                  <div className="flex max-w-fit items-center gap-1.5 rounded-full bg-[#FFF0E1] px-4 py-0.5">
                    <img className="h-4" src={ratingsIcon} alt="Rating Icon" />
                    <p className="text-[#FF8811]">{ratings}</p>
                  </div>
                </div>
                {/* Category */}
                <div className="space-y-1.5">
                  <p className="max-w-max">Game Category</p>

                  <div className="badge badge-secondary font-medium">
                    {category}
                  </div>
                </div>
              </div>
              {/* Download Button */}
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary xs:w-fit w-full px-10"
                whiteTap={{ scale: 0.97 }}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={downloadLink}
                >
                  <span className="flex items-center justify-center gap-1">
                    {" "}
                    <FiDownload /> Dowload
                  </span>
                </Link>
              </motion.button>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </section>
    </>
  );
}
