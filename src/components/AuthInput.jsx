
function AuthInput({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  icon,
  autoComplete,
  rightElement,
  error,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>

      <div className={`input-wrapper ${error ? "input-error" : ""}`}>
        <span className="input-icon" aria-hidden="true">
          {icon}
        </span>

        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
         autoComplete={autoComplete || "off"}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          required
        />

        {rightElement}
      </div>

      {error && (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

export default AuthInput;
