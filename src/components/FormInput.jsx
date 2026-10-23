
function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  autoComplete,
}) {
  return (
    <div className="form-field">
      {/* Label displayed above the input */}
      <label htmlFor={name}>{label}</label>

      {/* Reusable input field */}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required
      />
    </div>
  );
}

export default FormInput;
