import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

export default function ResetPasswordPage() {
  const { loginEmail, setLoginEmail, resetPasswordBySendEmail } = useAuth();

  const navigate = useNavigate();

  function handleForgetPassword(e) {
    e.preventDefault();

    resetPasswordBySendEmail(loginEmail)
      .then(() => {
        toast.success("Check your email for reset password.");

        // Clear
        setLoginEmail("");

        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }

  return (
    <section className="flex items-center justify-center py-14">
      <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-semibold">
            Reset your password
          </h2>
          <p className="text-center">
            Enter your user account's verified email address and we will send
            you a password reset link.
          </p>
          <form onSubmit={handleForgetPassword}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input placeholder:text-gray-100/20"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary my-4">
                Send password reset email
              </button>
            </fieldset>
          </form>
          <p className="text-center font-semibold">
            Don’t Have An Account ?{" "}
            <Link to="/register" className="text-secondary">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
