import React from "react";

const H2MainTitle = ({ title }) => {
  return (
    <h2 className="xl:mt-8 h2">
      My <span className="text-accent">{title}</span> <span className="text-accent">.</span>
    </h2>
  );
};

export default H2MainTitle;
