import { NotepalStack } from "@utils/projects";
import ProjectCard from "./components/ProjectCard";
import NoteUI from "@assets/Note.png";
import * as motion from "motion/react-client";
const ProjectDetails = () => {
  return (
    <div className="mt-10 flex flex-col items-center ">
      <h1 className="font-heading text-green-100 font-bold text-7xl">
        NotePal
      </h1>
      <div className="flex flex-col gap-10 items-center max-w-195">
        <div className="flex-1 w-75 md:w-144.75 flex flex-col gap-6">
          <ProjectCard projectImg={NoteUI} rounded />
          <div className="flex gap-4 items-center justify-center">
            <button className="bg-green-100 rounded-full h-fit px-6 py-2 text-off-white">
              <a
                href="https://notepals.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </button>
            <button className="border border-green-100 rounded-full h-fit px-6 py-2 text-green-100">
              <a
                href="https://github.com/BK2540/notepals"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-green-100 font-bold text-2xl lg:text-[32px]">
              Overview
            </p>
            <p className="text-black-80 dark:text-off-white text-base wrap-break-word ">
              This project is about daily note taking that allow user to add
              daily to do list , note and also their mood of the day.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-green-100 font-bold text-[20px] lg:text-[32px]">
              Tech Stack
            </p>
            <div className="grid grid-cols-3 gap-4">
              {NotepalStack.map((stack, index) => (
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5 * index,
                  }}
                  className="text-black-80 dark:text-off-white text-base wrap-break-word border border-green-100 dark:border-green-50 rounded-xl py-4 px-4 flex justify-center items-center"
                  key={index}
                >
                  {stack}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
