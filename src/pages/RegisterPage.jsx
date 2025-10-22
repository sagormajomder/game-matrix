import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import GoogleLogin from "../components/GoogleLogin";
import { useAuth } from "../contexts/AuthContext";

export default function RegisterPage() {
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { createUser, updateUserProfile, signOutUser, setIsLoading } =
    useAuth();

  const navigate = useNavigate();

  function handleRegistration(e) {
    e.preventDefault();

    // Password validation using single regex
    // (?=.*[a-z]) - at least one lowercase letter
    // (?=.*[A-Z]) - at least one uppercase letter
    // .{6,} - at least 6 characters
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and contain both uppercase and lowercase letters",
      );
      return;
    }

    //1. Create User
    createUser(email, password)
      .then((userCredential) => {
        //2. Update user info
        updateUserProfile({
          displayName,
          photoURL,
        })
          .then(() => {
            // 3. immediately signout user
            signOutUser()
              .then(() => {
                toast.success("User registration successful.");
                setIsLoading(false);

                // Clear Values
                setDisplayName("");
                setPhotoURL("");
                setEmail("");
                setPassword("");

                navigate("/login");
              })
              .catch((error) => {
                console.log(error);
                toast.error(error.message);
              });
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if (errorCode === "auth/email-already-in-use") {
          toast.error("User already exists in the database. Try another email");
        } else if (errorCode === "auth/weak-password") {
          toast.error("Enter at least 6 digit password");
        } else if (errorCode === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
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

    // console.log("Form submitted successfully", {
    //   displayName,
    //   photoURL,
    //   email,
    //   password,
    // });
  }

  return (
    <>
      <title>Game Matrix - User Registration</title>
      <section className="flex items-center justify-center py-14">
        <div className="card bg-base-200 w-full max-w-md shrink-0 items-center justify-center shadow-2xl">
          <div className="card-body w-full max-w-md">
            <h2 className="text-center text-2xl font-semibold">
              Register your account
            </h2>
            <form onSubmit={handleRegistration}>
              <fieldset className="fieldset">
                {/* Name  */}
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input w-full placeholder:text-gray-100/20"
                  placeholder="Name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />

                {/* Photo URl  */}
                <label htmlFor="photo" className="label">
                  Photo URL{" "}
                </label>
                <input
                  name="photo"
                  id="photo"
                  type="text"
                  className="input w-full placeholder:text-gray-100/20"
                  placeholder="Photo URL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  required
                />

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <p className="mt-1 text-sm text-gray-500">
                  Password length must be at least 6 chararacter, must have both
                  lower (a-z) and upper case letters (A-Z)
                </p>

                <button type="submit" className="btn btn-primary mt-2">
                  Register
                </button>
              </fieldset>
            </form>
            <div className="divider">OR</div>
            <GoogleLogin />
            <p className="text-center font-semibold">
              Already have an account ?{" "}
              <Link to="/login" className="text-secondary hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
