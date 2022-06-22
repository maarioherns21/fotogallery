import "./Footer2.css";

export default function Footer2() {
  return (
    <div className="footer-container">
      <div className="input-areas">
        <form>
          <input
            className="footer-input"
            name="email"
            type="email"
            placeholder="Your Email"
          />
          <button>subscribe</button>
        </form>
      </div>
    </div>
  );
}
