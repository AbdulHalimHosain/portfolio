import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`w-full p-4 mob:p-6 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark"
          ? "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg"
          : "bg-slate-50 text-gray-800 hover:bg-slate-100 hover:shadow-md"
      } hover:scale-105 transform`}
    >
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-green-400">
        {name || "Heading"}
      </h1>
      <p className="mt-5 opacity-90 text-lg text-slate-400 dark:text-slate-200">
        {description ||
          "I offer high-quality, tailored solutions that meet your unique needs. Whether you need consulting, development, or ongoing support, I am here to help you."}
      </p>
    </div>
  );
};

export default ServiceCard;
