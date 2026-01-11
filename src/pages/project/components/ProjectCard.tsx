import * as motion from "motion/react-client";

interface CardProps {
  projectImg: string;
  width?: number;
  height?: number;
  rounded?: boolean;
  canClick?: boolean;
}

const ProjectCard = ({
  projectImg,
  width = 579,
  height = 381,
  rounded = false,
  canClick,
}: CardProps) => {
  return (
    <motion.div
      whileHover={{ scale: canClick ? 1.02 : 1 }}
      transition={{ duration: canClick ? 0.5 : 1 }}
      className={`${
        rounded ? "rounded-3xl" : "rounded-tl-3xl rounded-tr-3xl"
      } bg-black-70 w-full h-30 md:h-75 p-4 flex flex-col gap-2 mt-4 lg:mt-10 overflow-hidden`}
      style={{ width: width, height: height }}
    >
      <div className="flex gap-1 items-center">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-orange-50" />
        <div className="w-3 h-3 rounded-full bg-green-100" />
      </div>

      {/* Image zoom */}
      <motion.img
        whileHover={{ scale: canClick ? 1.02 : 1 }}
        transition={{ duration: canClick ? 0.6 : 1 }}
        src={projectImg}
        alt="NotePals UI"
        className={`rounded-2xl object-fill object-center ${
          rounded ? "h-[95%]" : "h-full"
        }`}
      />
    </motion.div>
  );
};

export default ProjectCard;
