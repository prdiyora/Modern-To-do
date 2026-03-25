// ============================================
// 📁 src/components/Footer.jsx
// 🎯 Purpose: Displays footer info at the bottom
// 🔹 Concept: Simple component, no props needed
// ============================================

function Footer() {
  // 🔹 Get current year dynamically (no hardcoding!)
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        Made with <span className="footer-heart">❤️</span> using React |{" "}
        <span className="footer-year">© {currentYear}</span> Todo Master
      </p>
    </footer>
  );
}

export default Footer;
// ============================================