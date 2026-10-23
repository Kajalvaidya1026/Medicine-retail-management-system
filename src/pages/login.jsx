
import { useState } from "react";
import "../App.css";
//import{ loginUser} from "../api/auth.js"; 
import { loginUser } from "../api/authService.js";

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
 
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  async function handleLogin(event) {
  event.preventDefault();

  setMessage("");

  if (!email.trim() || !password) {
    setMessage("Please enter your email and password.");
    setMessageType("error");
    return;
  }

  const emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

  const trimmedEmail = email.trim();

  if (
    !emailPattern.test(trimmedEmail) ||
    trimmedEmail.includes("..") ||
    trimmedEmail.startsWith(".") ||
    trimmedEmail.endsWith(".")
  ) {
    setMessage("Please enter a valid email address.");
    setMessageType("error");
    return;
  }

  setIsLoading(true);

  try {
    const response = await loginUser(trimmedEmail, password);

    // Handle APIs that return Axios responses or plain data.
    const data = response?.data ?? response;

    if (data?.flag === false || data?.success === false) {
      setMessage(data.message || "Invalid email or password.");
      setMessageType("error");
      return;
    }

    setMessage(data?.message || "Login successful!");
    setMessageType("success");
  } catch (error) {
    setMessage(
      error.response?.data?.message ||
        error.message ||
        "Login failed. Please check your credentials and try again."
    );
    setMessageType("error");
  } finally {
    setIsLoading(false);
  }

    //call loginUser function from api/auth.js to send login request to backend 
  loginUser(trimmedEmail, password)
  .then((data) => {
    setMessage(data.message || "Login successful!");
    setMessageType("success");
  })
  .catch((error) => {
    setMessage(error.message || "Login failed. Please try again.");
    setMessageType("error");
  });

}

  return (
    <main className="login-page">
      {/* Decorative glowing background */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* Floating medicine symbols */}
      <div className="medicine medicine-one">✚</div>
      <div className="medicine medicine-two">＋</div>
      <div className="medicine medicine-three">✚</div>
      <div className="medicine medicine-four">＋</div>

      {/* Main 3D login card */}
      <section className="login-card">
        <div className="brand-icon">✚</div>

        <p className="brand-name">MEDICARE</p>

        <h1>Welcome Back!</h1>

        <p className="subtitle">
          Sign in to your medicine management account
        </p>

        <form onSubmit={handleLogin}>
          {/* Email input */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <div className="input-wrapper">
              <span className="input-icon" aria-hidden="true">
                ✉
              </span>

              <input
                id="email"
                type="email"
                placeholder="you@gmail.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
                autoComplete="username"
                required
              />
            </div>
          </div>

          {/* Password input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <div className="input-wrapper password-wrapper">
              <span className="input-icon" aria-hidden="true">
                ♙
              </span>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setMessage("");
                }}
                autoComplete="current-password"
                required
              />

              <button
                className="show-password"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember me and forgot password */}
          <div className="form-options">
            <label className="remember-label">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#forgot-password">Forgot password?</a>
          </div>

          {/* Submit button */}
          <button
  className="login-button"
  type="submit"
  disabled={isLoading}
>
  {isLoading ? "Signing In..." : "Sign In"}
  {!isLoading && <span> →</span>}
</button>

          {/* Login validation message */}
          {message && (
            <p
              className={`status-message ${messageType}`}
              role="status"
              aria-live="polite"
            >
              {message}
            </p>
          )}
        </form>

        {/* <div className="divider">
          <span>SECURE MEDICINE MANAGEMENT</span>
        </div> */}

        <p className="register-text">
          New to Medicare?{" "}
          <a href="#register">Create an account</a>
        </p>

        <div className="security-note">
          <span aria-hidden="true">🔒</span>
          Your account security matters to us
        </div>
      </section>

      <footer className="page-footer">
        © 2026 Medicare · Smarter healthcare management
      </footer>
    </main>
  );
}

export default Login;

