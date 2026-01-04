import { useTheme } from "@contexts/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`rounded-full w-12 h-12 p-0.5 flex items-center justify-center ${
        theme === "dark" ? "bg-off-white" : "bg-black-80"
      }`}
      onClick={toggleTheme}
    >
      <div
        className={`rounded-tl-full rounded-bl-full ${
          theme === "dark" ? "bg-black-80" : "bg-off-white"
        } h-full w-full flex items-center justify-center`}
      >
        <BrightnessLowIcon
          // fontSize="small"
          sx={{ color: theme === "dark" ? "#fefbe8" : "#1E1E1E", fontSize: 16 }}
        />
      </div>
      <div
        className={`rounded-tr-full rounded-br-full ${
          theme === "dark" ? "bg-off-white" : "bg-black-80"
        } h-full w-full flex items-center justify-center`}
      >
        <DarkModeIcon
          // fontSize="small"
          sx={{ color: theme === "dark" ? "#1E1E1E" : "#fefbe8", fontSize: 16 }}
        />
      </div>
    </button>
  );
};

export default ThemeButton;
