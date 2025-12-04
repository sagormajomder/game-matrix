import { motion } from "motion/react";
import SectionTitle from "../SectionTitle";

export default function GameOfTheWeek() {
  return (
    <section className="my-8 space-y-10 py-4">
      <SectionTitle
        title="Game of the Week"
        desc="Level up with our weekly featured pick"
      />
      <div className="xs:p-10 md:text-base-content flex flex-col items-start gap-10 overflow-hidden rounded-md bg-red-50 p-4 text-black md:flex-row md:bg-transparent md:p-0">
        <motion.figure
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden md:basis-1/2"
        >
          <img
            className="md:max-h-auto max-h-107.5 w-full rounded-md object-cover"
            src="https://i.ibb.co.com/SXMYCGJL/david-thor-fjalarsson-david-thor-fjalarsson-deadcells-artcover.jpg"
            alt="Dead Cells Game Poster"
          />
        </motion.figure>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="basis-1/2"
        >
          <h3 className="heading-3">
            Dead Cells{" "}
            <span className="text-base text-gray-600">by Motion Twin</span>
          </h3>
          <p className="bg-secondary mb-2 max-w-fit rounded-full px-2 py-1 text-xs text-black">
            {"Thriller / Mystery".toUpperCase()}
          </p>
          <p className="mb-4">
            Dead Cells is a fast‑paced roguelike action‑platformer that
            challenges players with procedurally generated levels, fluid
            movement, and punishing combat. You play as a reanimated corpse
            exploring a shifting castle, battling enemies with swords, bows,
            magic, and bizarre weapons. Each run offers new challenges,
            upgrades, and secrets, encouraging experimentation and mastery.
          </p>
          <p>
            With unlockable paths, mutations, and diverse builds, Dead Cells
            rewards adaptability and skill. Its pixel art style and dynamic
            soundtrack add flair to the brutal gameplay loop, making every
            encounter thrilling. Addictive, stylish, and endlessly replayable,
            Dead Cells keeps players coming back for more week after week.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
