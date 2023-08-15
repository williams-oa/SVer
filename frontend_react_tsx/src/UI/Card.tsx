import React from "react";

interface CardProps {
  
  className?: string;
  children: any;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return <article className={`card ${className}`}>{children}</article>;
};

export default Card;
