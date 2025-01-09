import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { useTheme } from "next-themes"; 

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  const { theme } = useTheme(); 
  // Refs for sections
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    if (aboutRef.current) { 
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className= {`relative ${data.showCursor && "cursor-none"} overflow-hidden `}>
      {data.showCursor && <Cursor />}
      <Head>
        <Link href={"/"}>
          <title>{data.name}</title>
        </Link>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10 flex flex-col laptop:flex-row items-center">
  <div className="flex justify-center mb-6 laptop:mb-0">
    {/* Profile Picture */}
    <img
      src="images/pp.jpg" 
      alt="Profile"
      className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-teal-500" 
    />
  </div>

  <div className="text-center laptop:text-left laptop:ml-10">
    <h1
      ref={textOne}
      className="text-4xl tablet:text-5xl laptop:text-5xl p-2 font-bold text-teal-600 leading-tight mb-3"
    >
      {data.headerTaglineOne}
    </h1>
    <h1
      ref={textTwo}
      className="text-4xl tablet:text-5xl laptop:text-5xl p-2 font-bold text-teal-500 leading-tight mb-3"
    >
      {data.headerTaglineTwo}
    </h1>
    <h1
      ref={textThree}
      className="text-4xl tablet:text-5xl laptop:text-5xl p-2 font-bold text-emerald-500 leading-tight mb-3"
    >
      {data.headerTaglineThree}
    </h1>
    <h1
      ref={textFour}
      className="text-4xl tablet:text-5xl laptop:text-5xl p-2 font-bold text-green-400 leading-tight mb-3"
    >
      {data.headerTaglineFour}
    </h1>
  </div>
</div>

<Socials className="mt-5 laptop:mt-8" />


        {/* Work Section */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="tablet:m-10 text-2xl font-bold text-center mb-6">Work</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                technologies={project.technologies}
                onClick={() => window.open(project.url)}
              />
            ))}
            
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl font-bold text-center mb-6">Services</h1>
          <div className="bg-gradient-to-br from-green-100 to-teal-200 rounded-xl shadow-xl w-full laptop:w-4/5 mx-auto p-8">
            <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-10">
              {data.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl font-bold text-center mb-6">
            Skills
          </h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {Object.entries(data.skills).map(([category, skills]) => (
              <div
                key={category}
                className="mt-4 p-6 bg-gradient-to-br from-green-100 to-teal-200 rounded-xl shadow-xl w-full laptop:w-4/5 mx-auto transform transition-transform duration-300 hover:scale-105"
              >
                <h2 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-green-700" : ""}`}>
                  {category}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <img
                        src={`/icons/${skill.icon}.png`}
                        alt={skill.name}
                        className="w-6 h-6"
                      />
                      <p className={`text-md ${theme === "dark" ? "text-green-700" : ""}`}>
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div
          ref={aboutRef}
          className="mt-10 laptop:mt-40 p-4 flex flex-col items-center"
        >
          <h1 className="text-2xl laptop:text-4xl font-extrabold text-center mb-6">
            About Me
          </h1>
          <div
            className="mt-4 p-6 bg-gradient-to-br from-green-100 to-teal-200 rounded-xl shadow-xl w-full laptop:w-3/5 mx-auto transform transition-transform duration-300 hover:scale-105"
          >
            <p className="text-lg laptop:text-2xl leading-relaxed text-green-700 text-justify">
              {data.aboutpara}
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
