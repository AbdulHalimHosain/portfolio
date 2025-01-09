import React from "react";
import Button from "../Button";
import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button
          key={index}
          onClick={() => window.open(social.link, "_blank")}
          className="flex items-center space-x-2"
        >
          <img
            src={`/icons/${social.icons}.png`}
            alt={social.title}
            className="w-6 h-6"
          />
          <span className="text-sm ml-2 text-gray-400 dark:text-gray-200">{social.title}</span>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
