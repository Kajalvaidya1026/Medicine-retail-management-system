
function Logo({ showText = true, size = "medium" }) {
  return (
    <div className={`medicare-logo medicare-logo-${size}`}>
      <div className="medicare-logo-icon" aria-hidden="true">
        ✚
      </div>

      {showText && (
        <div className="medicare-logo-text">
          <span>MEDI</span>
          <span className="medicare-logo-highlight">CARE</span>
        </div>
      )}
    </div>
  );
}

export default Logo;
