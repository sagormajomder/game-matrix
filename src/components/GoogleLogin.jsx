import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

export default function GoogleLogin() {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  function handleGoogleSignIn() {
    signInWithGoogle()
      .then(() => {
        toast.success("User login successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if (errorCode === "auth/email-already-in-use") {
          toast.error("User already exists in the database. Try another email");
        } else if (
          errorCode === "auth/account-exists-with-different-credential"
        ) {
          toast.error("Same email used with diffent social login");
        } else if (errorCode === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (errorCode === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (errorCode === "auth/operation-not-allowed") {
          toast.error("Operation not allowed. Please contact support.");
        } else if (errorCode === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(errorMessage || "An unexpected error occurred.");
        }
      });
  }
  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="btn btn-accent btn-outline w-full"
    >
      <FcGoogle size={22} /> Login with Google
    </button>
  );
}
