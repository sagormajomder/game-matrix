import { motion } from "motion/react";
export default function SectionTitle({ title, desc }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="heading-2">{title}</h2>
      <p>{desc}</p>
    </motion.div>
  );
}
