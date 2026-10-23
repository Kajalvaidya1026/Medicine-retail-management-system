
function BrandPanel() {
  return (
    <section className="brand-panel">
      {/* Medicare logo */}
      <div className="brand-logo">✚</div>

      <h1 className="brand-title">
        MEDI<span>CARE</span>
      </h1>

      <p className="brand-tagline">
        Better Health · Brighter Tomorrow
      </p>

      {/* Decorative medical illustration */}
      <div className="medical-art" aria-hidden="true">
        <div className="medical-shield">
          <span>✚</span>
        </div>

        <div className="medical-bottle">✚</div>

        <div className="medical-tablets">
          <span>●</span>
          <span>●</span>
          <span>●</span>
        </div>
      </div>

      {/* Healthcare benefits */}
      <div className="brand-benefits">
        <div className="benefit-item">
          <span className="benefit-icon">♢</span>
          <p>Secure<br />Registration</p>
        </div>

        <div className="benefit-item">
          <span className="benefit-icon">♡</span>
          <p>Trusted<br />Healthcare</p>
        </div>

        <div className="benefit-item">
          <span className="benefit-icon">♧</span>
          <p>For a<br />Healthier You</p>
        </div>
      </div>
    </section>
  );
}

export default BrandPanel;
