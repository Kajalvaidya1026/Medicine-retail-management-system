import { useState } from "react";
import "../styles/ForgotPassword.css";
import Logo from "../components/logo.jsx";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setMessageType("");

    // Check that the email field is not empty.
    if (!email.trim()) {
      setMessage("Please enter your registered email address.");
      setMessageType("error");
      return;
    }

    // Basic email validation.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    // Frontend demo only. Connect your backend API here.
    setIsLoading(true);

    setIsLoading(true);
    try {
      const { data } = await forgotPassword(email);
      setMessage(
        data?.message ||
          "If this email is registered, a reset link has been sent.",
      );
      setMessageType("success");
    } catch (error) {
      setMessage(
        error.response?.data?.detail ||
          "Something went wrong. Please try again.",
      );
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="forgot-page">
      {/* Animated background decorations */}
      <div className="forgot-orb orb-one" />
      <div className="forgot-orb orb-two" />
      <div className="forgot-orb orb-three" />

      <div className="forgot-layout">
        {/* Left side: 3D illustration */}
        <section className="forgot-visual">
          <div className="visual-glow" />

          <div className="lock-scene">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="floating-lock">
              <div className="lock-shackle" />
              <div className="lock-body">
                <span className="lock-keyhole" />
                <span className="lock-key-stem" />
              </div>
            </div>

            <span className="float-symbol symbol-plus">+</span>
            <span className="float-symbol symbol-star">✦</span>
            <span className="float-symbol symbol-dot">✧</span>
          </div>
          <h2>Your security matters.</h2>
          <p>
            A simple step to get you back to your
            <br />
            healthcare management dashboard.
          </p>
        </section>

        {/* Right side: Forgot password form */}
        <section className="forgot-card">
          <a href="/login" className="forgot-brand">
            <Logo size="large" />
          </a>


          <p className="forgot-eyebrow">ACCOUNT RECOVERY</p>

          <h1>Forgot password?</h1>

          <p className="forgot-description">
            Don't worry! Enter your registered email address and we'll help you
            reset your password.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="forgot-email">Email address</label>

            <div className="forgot-input-wrap">
              <span className="email-icon" aria-hidden="true">
                ✉
              </span>

              <input
                id="forgot-email"
                type="email"
                placeholder="you@gmail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
              />
            </div>

            {message && (
              <div
                className={`forgot-message ${messageType}`}
                role="status"
                aria-live="polite"
              >
                {message}
              </div>
            )}

            <button
              className="forgot-submit"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner" />
                  Please wait...
                </>
              ) : (
                <>
                Send code 
                </>
              )}
            </button>
          </form>

          <a href="/login" className="back-to-login">
            <span>←</span> Back to Login
          </a>

          <div className="forgot-security">
            <span>▣</span>
            Your account security is our priority.
          </div>
        </section>
      </div>

      <footer className="forgot-footer">
        © {new Date().getFullYear()} MEDICARE · Your health, our priority.
      </footer>
    </main>
  );
}

export default ForgotPassword;
