import Card from "../cards/Card";
import "./Statistics.css";
import { featuresArray } from "../../utils/data";

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
              {index !== featuresArray.length-1 && 
              <span className="cyan-line" id={`${index === 1 ? 'line2' : ''}`}></span>}
             </div>
      ))
      }
      
      </div>
    </section>
  );
};

export default Statistics;
