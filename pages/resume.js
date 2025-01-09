import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {data.showCursor && <Cursor />}
      <div className={`container mx-auto mb-10 ${data.showCursor && "cursor-none"} overflow-x-hidden`}>
        <Header isResume />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full max-w-4xl p-10 mob:p-5 desktop:p-20 rounded-lg shadow-lg 
              ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gradient-to-br from-green-50 via-white to-green-50 text-gray-800"}`}
            >
              {/* Name and Tagline */}
              <h1 className="text-4xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5 text-gray-600 dark:text-gray-300">{data.resume.tagline}</h2>
              <h2 className="w-4/5 text-lg mt-5 opacity-75 dark:text-gray-400">{data.resume.description}</h2>

              {/* Social Links */}
              <div className="mt-4">
                <Socials />
              </div>

              {/* Experience Section */}
              <div className="mt-10">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Experience</h1>
                {data.resume.experiences.map(({ id, dates, type, position, bullets }) => (
                  <ProjectResume
                    key={id}
                    dates={dates}
                    type={type}
                    position={position}
                    bullets={bullets}
                  />
                ))}
              </div>

              {/* Education Section */}
              <div className="mt-10">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Education</h1>
                {data.resume.education.map((edu) => (
                  <div key={edu.id} className="mt-4">
                    {edu.universityName && (
                      <div>
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{edu.universityName}</h2>
                        <h3 className="text-sm text-gray-600 dark:text-gray-400">{edu.universityDate}</h3>
                        <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">{edu.universityPara}</p>
                      </div>
                    )}
                    {edu.collegeName && (
                      <div className="mt-4">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{edu.collegeName}</h2>
                        <h3 className="text-sm text-gray-600 dark:text-gray-400">{edu.collegeDate}</h3>
                        <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">{edu.collegePara}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Projects Section */}
              <div className="mt-10">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Projects</h1>
                {data.resume.projects && data.resume.projects.length > 0 ? (
                  data.resume.projects.map((project) => (
                    <div key={project.id} className="mt-4">
                      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{project.title}</h2>
                      <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">{project.description}</p>
                      <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Technologies:</span>{" "}
                        {project.technologies && Array.isArray(project.technologies)
                          ? project.technologies.join(", ")
                          : "Not specified"}
                      </p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">No projects data available.</p>
                )}
              </div>

              {/* Skills Section */}
              <div className="mt-10">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {data.resume.languages && (
                    <div className="mt-5 mob:mt-5">
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Languages</h2>
                      <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400">
                        {data.resume.languages.map((language, index) => (
                          <li key={index} className="py-1">{language}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {data.resume.frameworks && (
                    <div className="mt-5 mob:mt-5">
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Frameworks</h2>
                      <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400">
                        {data.resume.frameworks.map((framework, index) => (
                          <li key={index} className="py-1">{framework}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {data.resume.others && (
                    <div className="mt-5 mob:mt-5">
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Others</h2>
                      <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400">
                        {data.resume.others.map((other, index) => (
                          <li key={index} className="py-1">{other}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Research Section */}
              <div className="mt-10">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Research</h1>
                {data.resume.Research && data.resume.Research.length > 0 ? (
                  data.resume.Research.map((research) => (
                    <div key={research.id} className="mt-4">
                      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{research.title}</h2>
                      <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">{research.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">No research data available.</p>
                )}
              </div>

              {/* Awards Section */}
              <div className="mt-10">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Awards</h1>
                {data.resume.Awards && data.resume.Awards.length > 0 ? (
                  data.resume.Awards.map((award) => (
                    <div key={award.id} className="mt-4">
                      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{award.title}</h2>
                      <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">{award.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">No awards data available.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
