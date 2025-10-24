import { motion } from "motion/react";

export default function GamesHeading({ totalGames, search, onSearch }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-6 flex flex-col-reverse items-center justify-between gap-2 sm:flex-row"
    >
      <h4 className="heading-4">({totalGames}) Games Found</h4>
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          type="search"
          className="grow"
          placeholder="Search Games"
        />
      </label>
    </motion.div>
  );
}
