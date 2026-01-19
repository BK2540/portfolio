import * as motion from "motion/react-client";
import Star from "@assets/ic-star-green.svg";
import NoteUI from "@assets/Note.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function Project() {
  const [onHover, setOnHover] = useState(false);

  return (
    <div className="w-full flex flex-col items-center mt-10 pb-10 justify-start  2xl:max-w-360">
      <div className="relative">
        <p className="font-heading text-4xl lg:text-7xl text-green-100 uppercase">
          Project
        </p>

        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          src={Star}
          alt="star"
          className="absolute -top-6 -right-14 w-12 h-12 lg:top-2 lg:-right-20 lg:w-18 lg:h-18"
        />
        <motion.img
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          src={Star}
          alt="star"
          className="absolute -bottom-2 -right-8 h-6 w-6 lg:-bottom-8 lg:-right-6 lg:w-10  lg:h-10"
        />
      </div>
      <Link
        to={"/projects/notepal"}
        className=" bg-green-100 rounded-3xl w-[70vw] xl:w-[40vw] h-50 md:h-100 mt-14 pt-6 px-6 relative flex flex-col justify-between"
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <p
          className="text-[24px] dark:text-off-white text-black-80 font-normal text-right
leading-relaxed font-heading"
        >
          NotePal
        </p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="rounded-tl-3xl rounded-tr-3xl bg-black-70 w-full h-30 md:h-75 p-4 flex flex-col gap-2 mt-4 lg:mt-10 overflow-hidden"
        >
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-orange-50" />
            <div className="w-3 h-3 rounded-full bg-green-100" />
          </div>

          {/* Image zoom */}
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            src={NoteUI}
            alt="NotePals UI"
            className="rounded-2xl object-fill object-center"
          />
        </motion.div>
        {onHover && (
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 30 }}
              transition={{
                duration: 0.6,
                scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
              }}
              className="absolute -bottom-6 -right-4"
            >
              <AutoAwesomeRoundedIcon
                sx={{ width: 64, height: 64 }}
                className="text-black-80 dark:text-off-white"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 30 }}
              animate={{ opacity: 1, scale: 1, rotate: -30 }}
              transition={{
                duration: 0.6,
                scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
              }}
              className="absolute -top-6 left-8"
            >
              <StarRoundedIcon
                sx={{ width: 72, height: 72 }}
                className="text-black-80 dark:text-off-white"
              />
            </motion.div>
          </div>
        )}
      </Link>
    </div>
  );
}

export default Project;
