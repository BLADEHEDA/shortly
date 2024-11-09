import Card from "../cards/Card";
import "./Statistics.css";
import iconBrandRecognition from "/icon-brand-recognition.svg";
import iconDetailedRecords from "/icon-detailed-records.svg";
import iconFullyCustomizable from "../../../public/icon-fully-customizable.svg";

const Statistics = () => {
  const featuresArray = [
    {
      id: 1,
      icon: iconBrandRecognition,
      title: "Brand Recognition",
      content:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: 2,
      icon: iconDetailedRecords,
      title: "Detailed Records",
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 3,
      icon: iconFullyCustomizable,
      title: "Fully Customizable",
      content:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

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
      {featuresArray.map((feature,index)=>(
               <div
               key={feature.id}
               className="card-item"
               id={`card${index + 1}`} 
               >
               <Card
                 image={feature.icon}
                 alt={feature.title}
                 title={feature.title}
                 cardText={feature.content}
               />
              {index !== 2 && <span className="cyan-line"></span>}
             </div>
      ))
      }
      
      </div>
    </section>
  );
};

export default Statistics;
