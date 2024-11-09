import "./Hero.css";
import { Button } from "antd";
import { heroButtonStyle } from "../../styles/CustomStyles";
import illustration from "/illustration-working.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <img
          src={illustration}
          alt="illustration-image"
          className="illustration"
        />
      </div>
      <div className="hero-right">
        <h2 className="hero-header">More than just shorter links</h2>
        <p className="herotext">
          Build your brand recognition and get detailed insights on how your
          links are perfoming
        </p>
        <div className="hero-button">
          <Button type="primary" style={heroButtonStyle}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
