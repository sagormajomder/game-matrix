import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import GoogleLogin from "../components/GoogleLogin";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signInUser, setIsLoading, loginEmail, setLoginEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function HandleLogin(e) {
    e.preventDefault();

    signInUser(loginEmail, password)
      .then((userCredential) => {
        setIsLoading(false);
        toast.success("user log in successfully!");

        // Clear info
        setLoginEmail("");
        setPassword("");

        navigate(location.state ?? "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if (errorCode === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (errorCode === "auth/invalid-credential") {
          toast.error(
            "User not found. Please enter correct email and password",
          );
        } else if (errorCode === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (errorCode === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (errorCode === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (errorCode === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (errorCode === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(errorMessage || "An unexpected error occurred.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(function () {
    setLoginEmail("");
  }, []);

  return (
    <>
      <title>Game Matrix - User Login</title>
      <section className="flex items-center justify-center py-14">
        <div className="card bg-base-200 w-full max-w-md shrink-0 items-center justify-center shadow-2xl">
          <div className="card-body w-full max-w-md">
            <h2 className="text-center text-2xl font-semibold">
              Login your account
            </h2>
            <form onSubmit={HandleLogin}>
              <fieldset className="fieldset">
                {/* email  */}
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="input w-full placeholder:text-gray-100/20"
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />

                {/* password  */}
                <label htmlFor="password" className="label">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="input w-full pr-12 placeholder:text-gray-100/20"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {password.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-3 z-10 -translate-y-1/2 cursor-pointer text-xl hover:text-gray-400"
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </button>
                  )}
                </div>
                <div>
                  <Link to="/auth/reset-password" className="link link-hover">
                    Forgot password?
                  </Link>
                </div>

                <button type="submit" className="btn btn-primary mt-2">
                  Login
                </button>
              </fieldset>
            </form>
            <div className="divider">OR</div>
            <GoogleLogin />
            <p className="text-center font-semibold">
              Don’t have an account ?{" "}
              <Link
                to="/auth/register"
                className="text-secondary hover:underline"
              >
                Registration here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
