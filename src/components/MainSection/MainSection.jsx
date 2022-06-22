import "./MainSection.css";
import { Button } from "../Button/Button";

export default function MainSection() {
  return (
    <div className="section-container">
      <video src="/video/video.mp4" autoPlay loop muted />
      <h1>FotoBoot</h1>
      <p>What are you waiting for?</p>
      <Button
       className="btns hero-btns"
       buttonStyle="btn--outline"
       buttonSize="btn--large">
        GET STARTED
      </Button>
    </div>
  );
}
