function FormInput({
  label, name, type = "text", placeholder, value, onChange, autoComplete, error,
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        style={error ? { borderColor: "#ff6b6b" } : undefined}
        required
      />

      {error && (
        <p style={{ color: "#ff6b6b", fontSize: "13px", margin: "4px 0 0" }} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormInput;