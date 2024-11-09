import React from "react";
import "./Card.css";

interface CardProps {
  image: string;
  alt: string;
  title: string;
  cardText: string;
}

const Card: React.FC<CardProps> = ({ image, alt, title, cardText }) => {
  return (
    <div className="containers">
      <div className="image-cpontianer">
        <img src={image} alt={alt} />
      </div>
      <h2 className="card-header">{title}</h2>
      <p className="card-text">{cardText} </p>
    </div>
  );
};

export default Card;
