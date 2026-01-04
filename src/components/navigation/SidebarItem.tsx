import * as motion from "motion/react-client";

type SidebarItemProps = {
  label: string;
  isActive?: boolean;
  color?: string;
};

const SidebarItem = ({ label, isActive, color }: SidebarItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.85 }}
      className="relative flex items-center justify-center"
    >
      <p
        className={`-rotate-90 text-sm tracking-widest transition-colors capitalize
          ${isActive ? "font-semibold" : "text-black-80 dark:text-off-white"}`}
        style={isActive && color ? { color } : undefined}
      >
        {label}
      </p>
    </motion.div>
  );
};

export default SidebarItem;
