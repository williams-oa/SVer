import React, { ReactNode } from "react";

interface SectionHeadProps {
  icon: ReactNode;
  title: string;
  className?: string;
}

const SectionHead: React.FC<SectionHeadProps> = ({ icon, title, className }) => {
  return (
    <div className={`section__head ${className}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHead;
