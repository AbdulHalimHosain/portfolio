import React from "react";

const WorkCard = ({ img, name, description, technologies, onClick }) => {
  return (
    <div
      className="flex flex-col laptop:flex-row items-center p-4 rounded-lg border border-gray-300 hover:border-primary transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md link bg-gradient-to-br from-green-100 to-teal-200 rounded-xl shadow-xl w-full laptop:w-4/5 mx-auto p-8"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mb-4 laptop:mb-0 laptop:mr-4">
        <img
          alt={name}
          className="w-full h-full object-cover"
          src={img}
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between text-center laptop:text-left">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {name ? name : "Project Name"}
        </h1>
        <p className="text-md text-gray-900 dark:text-gray-900">
          {description ? description : "Description"}
        </p>
        <p className="text-md text-gray-400 dark:text-gray-300">
          {technologies ? technologies : "technologies"}
        </p>

      </div>
    </div>
  );
};

export default WorkCard;


