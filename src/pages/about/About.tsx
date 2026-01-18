import * as motion from "motion/react-client";
import Star from "@assets/ic-star-octagon.svg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { skillList, ToolList } from "@utils/index";
import Resume from "@assets/resume.pdf";

const About = () => {
  const openPdf = () => {
    window.open(Resume, "_blank", "noopener,noreferrer");
    console.log("click");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center  2xl:max-w-360  mt-10">
      <div className="relative  mt-6">
        <p className="font-heading text-5xl lg:text-7xl text-orange-50 uppercase">
          About
        </p>
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          src={Star}
          alt="star"
          className="absolute -top-10 -right-14 lg:-top-12 lg:-right-20 w-14 lg:w-18 h-14 lg:h-18"
        />
        <motion.img
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          src={Star}
          alt="star"
          className="absolute -bottom-2 -left-8 lg:-bottom-6 lg:-left-12 w-6 lg:w-10 h-6 lg:h-10"
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center mt-20 h-full">
        <div className="flex-1 gap-4  lg:gap-6 flex flex-col items-start justify-start  w-full h-full">
          <span
            className="text-[20px] dark:text-off-white text-black-80 font-normal max-w-105
leading-relaxed font-heading"
          >
            Hi,
          </span>
          <span
            className="text-base dark:text-off-white text-black-80 font-normal max-w-105
leading-relaxed"
          >
            I am a Front-End Developer with 2 years experience building web
            applications using Javascript and TypeScript.
          </span>

          <span
            className="text-base dark:text-off-white text-black-80 font-normal max-w-105
leading-relaxed"
          >
            I am a self-motivated, disciplined, and hardworking individual who
            enjoys learning and collaborating in team environments.
          </span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.85 }}
            className="mt-10 text-black-80 dark:text-off-white border border-orange-50 rounded-2xl px-4 py-2 w-fit hover:cursor-pointer"
            onClick={openPdf}
          >
            Resume
          </motion.button>
        </div>
        <div className="flex-1 gap-4  lg:gap-6 flex flex-col items-start h-full">
          <div>
            <p className="text-black-80 dark:text-off-white font-sans text-xl font-semibold">
              My Stack
            </p>
            <ul className="flex gap-6 flex-wrap">
              {skillList.map((skill) => (
                <li
                  key={skill}
                  className="flex gap-2 items-center justify-start text-black-80 dark:text-off-white font-normal text-base mt-4 w-37.5"
                >
                  <StarRoundedIcon sx={{ width: 12, height: 12 }} />
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-0.5 bg-black-80 dark:bg-orange-50 my-10" />

          <div>
            <p className="text-black-80 dark:text-off-white font-semibold text-lg opacity-80 font-sans">
              Tools
            </p>
            <ul className="flex gap-6 flex-wrap">
              {ToolList.map((tool) => (
                <li
                  key={tool}
                  className="flex gap-2 items-center justify-start text-black-80 dark:text-off-white font-normal text-base mt-4 w-37.5"
                >
                  <StarRoundedIcon sx={{ width: 12, height: 12 }} />
                  <p>{tool}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
