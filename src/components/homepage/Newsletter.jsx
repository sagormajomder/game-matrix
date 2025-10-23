import { motion } from "motion/react";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { toast } from "react-toastify";
import SectionTitle from "../SectionTitle";

export default function Newsletter() {
  function handleNewslatter(e) {
    e.preventDefault();
    toast.success("Subscription confirmed! Your indie game journey starts now");
  }
  return (
    <section className="bg-base-200 mt-6 mb-14 flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-800 px-4 py-14">
      <div className="bg-base-100 relative h-13 w-13 rounded-full border border-gray-800 p-5 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute top-6/12 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </div>

      <SectionTitle
        title="Don't miss out. Stay in loop"
        desc="Join our newsletter
to stay updated with fresh game news, tips, and indie releases"
      />

      <form
        onSubmit={handleNewslatter}
        className="flex w-[90%] flex-col gap-2 sm:w-4/7 sm:flex-row"
      >
        <input
          type="email"
          className="input w-full placeholder:text-gray-100/20 sm:basis-2/3"
          placeholder="Your email"
          required
        />
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="btn btn-primary w-full sm:basis-1/3"
        >
          <FaEnvelopeCircleCheck /> Subscribe
        </motion.button>
      </form>
    </section>
  );
}
