import { motion } from "motion/react";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

export default function ResetPasswordPage() {
  const { loginEmail, setLoginEmail, resetPasswordBySendEmail } = useAuth();

  function handleForgetPassword(e) {
    e.preventDefault();

    resetPasswordBySendEmail(loginEmail)
      .then(() => {
        toast.success("Check your email for reset password.");

        // Clear
        setLoginEmail("");
        // Redirect user to external link with a delay for showing toast
        setTimeout(() => {
          window.location.href = "https://mail.google.com/mail/u/0/#inbox";
        }, 800);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }

  return (
    <>
      <title>Game Matrix - Reset Password</title>
      <section className="flex items-center justify-center py-14">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
          }}
          className="card bg-base-200 w-full max-w-sm shrink-0 border border-gray-800"
        >
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
          </div>
        </motion.div>
      </section>
    </>
  );
}
