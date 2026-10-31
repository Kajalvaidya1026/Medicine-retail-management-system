import Logo from "../components/logo.jsx";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BrandPanel from "../components/BrandPanel";
import FormInput from "../components/FormInput";
import PasswordRequirements from "../components/PasswordRequirements";
import "../index.css";
import axiosClient from "../api/axiosClient";


const EMAIL_PATTERN =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z][a-zA-Z0-9-]*(\.[a-zA-Z]{2,})+$/;

function isValidEmail(email) {
  const e = email.trim();

  return (
    EMAIL_PATTERN.test(e) &&
    !e.includes("..") &&
    !e.startsWith(".") &&
    !e.endsWith(".")
  );
}

function Registration() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const [emailError, setEmailError] = useState("");

  // Load roles from the backend when the page opens
  useEffect(() => {
    axiosClient
      .get("/roles/viewRoles")
      .then((res) => setRoles(Array.isArray(res.data) ? res.data : []))
      .catch(() => setMessage("Could not load roles from the server."));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((previousUser) => ({
      ...previousUser,
      [name]: value,
    }));

    if (name === "email") {
      setEmailError(
        value && !isValidEmail(value)
          ? "Please enter a valid email address (e.g. name@gmail.com)."
          : ""
      );
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (
      !user.fullName.trim() ||
      !user.email.trim() ||
      !user.contactNumber.trim() ||
      !user.password ||
      !user.confirmPassword ||
      !user.role
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(user.email)) {
      setEmailError("Please enter a valid email address (e.g. name@gmail.com).");
      setMessage("Please correct the email address.");
      return;
    }

    if (user.password !== user.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (user.password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    if (!/^\d{10}$/.test(user.contactNumber.trim())) {
      setMessage("Enter a valid 10-digit contact number.");
      return;
    }

    const registrationData = {
      fullName: user.fullName.trim(),
      email: user.email.trim(),
      contactNumber: user.contactNumber.trim(),
      password: user.password,
      role: { roleId: Number(user.role) },
    };

    try {
      setLoading(true);

      const response = await axiosClient.post("/users/save", registrationData);

      if (response.status === 200 || response.status === 201) {
        setMessage("Registration successful!");
        setEmailError("");
        setUser({
          fullName: "",
          email: "",
          contactNumber: "",
          password: "",
          confirmPassword: "",
          role: "",
        });
        setTimeout(() => {
          navigate("/login", {
            state: {
              message: "Registration successful! Please login.",
            },
          });
        }, 2000);
      }
    } catch (error) {
      console.log(
        "REGISTER ERROR:",
        error.response?.status,
        error.response?.data,
        error.message
      );
      setMessage(
        error.response?.data?.detail ||
          error.response?.data?.message ||
          (error.response
            ? `Server error ${error.response.status}. Check the backend console.`
            : "Cannot reach the backend. Is it running on port 8085?")
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="registration-page">
      <div className="registration-layout">
        <BrandPanel />

        <section className="register-card">   
          <div className="register-icon">✚</div>

          <h2>Create Account</h2>

          <p className="register-subtitle">
            Join Medicare and manage your medicine needs with ease.
          </p>

          {message && (
            <p className="register-message" role="status">
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <FormInput
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              value={user.fullName}
              onChange={handleChange}
              autoComplete="name"
            />

            <FormInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="you@gmail.com"
              value={user.email}
              onChange={handleChange}
              autoComplete="email"
              error={emailError}
            />

            <FormInput
              label="Contact Number"
              name="contactNumber"
              type="tel"
              placeholder="10-digit mobile number"
              value={user.contactNumber}
              onChange={handleChange}
              autoComplete="tel"
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Create a strong password"
              value={user.password}
              onChange={handleChange}
              autoComplete="new-password"
            />

            <FormInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={user.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />

            <div className="form-field">
              <label htmlFor="role">Select Role</label>

              <select
                id="role"
                name="role"
                value={user.role}
                onChange={handleChange}
                required
              >
                <option value="">Choose your role</option>
                {roles.map((r, index) => (
                  <option key={r.roleId ?? index} value={r.roleId}>
                    {r.roleName}
                  </option>
                ))}
              </select>
            </div>

            <PasswordRequirements password={user.password} />

            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "✚ Create Account →"}
            </button>
          </form>

          <p className="register-footer">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </section>
      </div>
    </main>
  );
}

export default Registration;