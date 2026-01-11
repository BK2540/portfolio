import { NotepalStack } from "@utils/projects";
import ProjectCard from "./components/ProjectCard";
import NoteUI from "@assets/Note.png";

const ProjectDetails = () => {
  const goToGithub = () => {
    window.location.href = "https://github.com/BK2540/notepals";
  };

  const gotoNotepal = () => {
    window.location.href = "https://notepals.vercel.app";
  };

  return (
    <div className="mt-10">
      <h1 className="font-heading text-green-100 font-bold text-7xl">
        NotePal
      </h1>
      <div className="flex lg:flex-row flex-col gap-6">
        <div className="flex-1 w-144.75 flex flex-col gap-6">
          <ProjectCard projectImg={NoteUI} rounded />
          <div className="flex gap-4 items-center justify-center ">
            <button
              onClick={gotoNotepal}
              className="bg-green-100 rounded-full h-fit px-6 py-2 text-off-white"
            >
              Preview
            </button>
            <button
              onClick={goToGithub}
              className="border border-green-100 rounded-full h-fit px-6 py-2 text-green-100"
            >
              Github
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
                <p
                  className="text-black-80 dark:text-off-white text-base wrap-break-word"
                  key={index}
                >
                  {stack}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
