import { motion } from "motion/react";
import { MdOutlineUpdate } from "react-icons/md";
import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  return (
    <>
      <title>Game Matrix - My Profile</title>
      <section className="flex items-center justify-center py-14">
        {/* <h2>Welcome, {user?.displayName}</h2> */}
        <motion.div
          initial={{ x: 100 }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="bg-base-200 flex flex-col items-center gap-8 rounded-lg border border-gray-800 p-5"
        >
          {isLoading ? (
            <span className="loading loading-ring loading-xl inline-block h-40 w-40"></span>
          ) : (
            <img
              className="border-primary h-40 w-40 rounded-full border-4 object-cover"
              src={user?.photoURL}
              alt="Profile Picture"
            />
          )}

          <div className="grid grid-cols-1 items-center gap-y-1 text-gray-300 sm:grid-cols-[7.8125rem_15.625rem] sm:gap-y-2.5">
            <span>Full Name </span>
            <span className="bg-base-100 mb-4 rounded-sm border border-gray-800 px-3 py-1 font-medium sm:mb-0">
              {user?.displayName}
            </span>
            <span>Email Address </span>
            <span className="bg-base-100 mb-4 rounded-sm border border-gray-800 px-3 py-1 font-medium sm:mb-0">
              {user?.email}
            </span>
          </div>
          <Link to="/update-profile" className="btn btn-primary">
            <MdOutlineUpdate /> Update Profile
          </Link>
        </motion.div>
      </section>
    </>
  );
}
