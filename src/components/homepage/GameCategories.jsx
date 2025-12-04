import { motion } from "motion/react";
import { GiThunderBlade } from "react-icons/gi";
import {
  LiaDragonSolid,
  LiaPuzzlePieceSolid,
  LiaRunningSolid,
} from "react-icons/lia";
import SectionTitle from "../SectionTitle";

export default function GameCategories() {
  return (
    <section className="my-8 space-y-10 py-4">
      <SectionTitle
        title="Game Categories"
        desc="Discover indie gems across every style of play"
      />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
      >
        {/* Box 1 */}
        <CategoryCard category="Action">
          <GiThunderBlade className="text-primary mx-auto mb-3 text-5xl" />
        </CategoryCard>
        {/* Box 2 */}
        <CategoryCard category="Adventure">
          <LiaRunningSolid className="text-primary mx-auto mb-3 text-5xl" />
        </CategoryCard>
        {/* Box 3 */}
        <CategoryCard category="RPG">
          <LiaDragonSolid className="text-primary mx-auto mb-3 text-5xl" />
        </CategoryCard>
        {/* Box 4 */}
        <CategoryCard category="Puzzle">
          <LiaPuzzlePieceSolid className="text-primary mx-auto mb-3 text-5xl" />
        </CategoryCard>
      </motion.div>
    </section>
  );
}

function CategoryCard({ children, category }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-base-200 rounded-xl border border-gray-800 px-5 py-8 text-center"
    >
      <div>
        {children}
        <h3 className="heading-3 text-center">{category}</h3>
      </div>
    </motion.div>
  );
}
