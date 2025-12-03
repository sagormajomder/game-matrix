import Container from "./../components/Container";
import SectionTitle from "./../components/SectionTitle";

import { motion } from "motion/react";
import { GoGoal, GoPeople } from "react-icons/go";
import { LuBox } from "react-icons/lu";
import { MdOutlineStars } from "react-icons/md";
import { RiUserStarLine } from "react-icons/ri";
export default function AboutPage() {
  return (
    <section className="h-full py-14">
      <Container>
        <SectionTitle
          title="About Us"
          desc="GameMatrix is a vibrant platform dedicated to indie games, offering players a curated space to discover, explore, and enjoy unique titles. With regular updates through newsletters, it supports indie developers, fosters community engagement, and delivers fresh content and personalized recommendations, making gaming more exciting, inclusive, and rewarding for everyone."
        />
        {/* Mission and Vision */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="my-20 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {/* Box 1 */}
          <div className="bg-base-200 rounded-xl border border-gray-800 px-5 py-8">
            <GoGoal className="text-primary mb-3 text-5xl" />
            <div>
              <h3 className="heading-3">Our Mission</h3>
              <p>
                GameMatrix empowers gamers and supports indie developers by
                showcasing unique games, fostering community, and delivering
                fresh content.
              </p>
            </div>
          </div>
          {/* Box 2 */}
          <div className="bg-base-200 rounded-xl border border-gray-800 px-5 py-8">
            <MdOutlineStars className="text-primary mb-3 text-5xl" />
            <div>
              <h3 className="heading-3">Our Vision</h3>
              <p>
                GameMatrix envisions a thriving global hub where indie games
                shine, communities grow, and every gamer discovers unique
                experiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why we started */}
        <div className="my-20">
          <SectionTitle
            title="Why We Started"
            desc="GameMatrix was born from a passion for indie games and the desire to give them a spotlight. We wanted to create a space where gamers could discover unique games, developers could share their creativity, and communities could connect through fresh content, recommendations, and meaningful engagement."
          />
        </div>
        {/* Our team */}
        <SectionTitle title="Our Team" />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {/* Box 1 */}
          <div className="bg-base-200 rounded-xl border border-gray-800 px-5 py-8 text-center">
            <GoPeople className="text-primary mx-auto mb-3 text-5xl" />
            <div>
              <h3 className="heading-3">Dedicated Members</h3>
              <p>
                We collaborate to create the best experience for every gamer.
              </p>
            </div>
          </div>
          {/* Box 2 */}
          <div className="bg-base-200 rounded-xl border border-gray-800 px-5 py-8 text-center">
            <LuBox className="text-primary mx-auto mb-3 text-5xl" />
            <div>
              <h3 className="heading-3">Quality Assurance</h3>
              <p>
                Every game and feature is carefully reviewed to ensure top-notch
                delivery.
              </p>
            </div>
          </div>
          {/* Box 3 */}
          <div className="bg-base-200 rounded-xl border border-gray-800 px-5 py-8 text-center">
            <RiUserStarLine className="text-primary mx-auto mb-3 text-5xl" />
            <div>
              <h3 className="heading-3">Customer First</h3>
              <p>Your happiness and feedback drive everything we build.</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
