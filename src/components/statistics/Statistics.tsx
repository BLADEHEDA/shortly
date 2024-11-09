import Card from "../cards/Card";
import "./Statistics.css";
import brand from "/icon-brand-recognition.svg";
import detailedRecords from "/icon-detailed-records.svg";
import fullyCustomizable from "../../../public/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <section className="container">
      <div className="card-item">
        <h2 className="header">Advanced Statistics</h2>
        <p className="text">
          Track how your links are performing across the web with our advanced
          statistics dashboard{" "}
        </p>
      </div>
      <div className="card-container">
        <div className="card-item">
          <Card
            image={brand}
            alt={"brand-logo"}
            title={"Brand Recognition"}
            cardText={
              "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
            }
          />
        </div>
        <div className="card-item" id="card2">
          <Card
            image={detailedRecords}
            alt={"brand-logo"}
            title={"Brand Recognition"}
            cardText={
              "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
            }
          />
        </div>
        <div className="" id="card3">
          <Card
            image={fullyCustomizable}
            alt={"brand-logo"}
            title={"Brand Recognition"}
            cardText={
              "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
