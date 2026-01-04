import { useState } from "react";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

interface MenuProps {
  menu: string;
  path: string;
  color: string;
}

const Menu = ({ menu, path, color }: MenuProps) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      className={`hover:scale-105 transition-transform hover:border-b-2 relative`}
      style={{ borderColor: color }}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Link to={path}>
        <p className="font-heading text-[40px] lg:text-[84px] text-black-80 dark:text-off-white uppercase">
          {menu}
        </p>
      </Link>
      {onHover && (
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 30 }}
            animate={{ opacity: 1, scale: 1, rotate: -30 }}
            transition={{
              duration: 0.6,
              scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
            }}
            className="absolute bottom-0 -left-12"
          >
            <StarBorderRoundedIcon
              sx={{ width: 48, height: 48, color: color }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 30 }}
            transition={{
              duration: 0.6,
              scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
            }}
            className="absolute top-0 -right-12"
          >
            <AutoAwesomeRoundedIcon
              sx={{ width: 48, height: 48, color: color }}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Menu;
