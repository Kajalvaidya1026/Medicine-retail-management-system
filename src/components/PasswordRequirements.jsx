
const rules = [
  { label: "At least 8 characters", test: (p) => p.length >= 8 },
  { label: "One uppercase letter (A–Z)", test: (p) => /[A-Z]/.test(p) },
  { label: "One lowercase letter (a–z)", test: (p) => /[a-z]/.test(p) },
  { label: "One number (0–9)", test: (p) => /[0-9]/.test(p) },
  {
    label: "One special character (!@#$...)",
    test: (p) => /[^A-Za-z0-9\s]/.test(p),
  },
];

function PasswordRequirements({ password }) {
  return (
    <div className="password-requirements">
      <p>Password must contain:</p>

      <ul>
        {rules.map((rule) => {
          const passed = rule.test(password);

          return (
            <li
              key={rule.label}
              className={passed ? "rule-passed" : "rule-pending"}
            >
              <span aria-hidden="true">
                {passed ? "✓" : "○"}
              </span>{" "}
              {rule.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { rules };
export default PasswordRequirements;
