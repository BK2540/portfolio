import ThemeButton from "@components/button/ThemeButton";
import Menu from "@components/navigation/Menu";
import { menuList } from "@utils/index";

const Home = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 h-full">
      <div className="flex flex-col flex-1 justify-center items-start gap-6 md:gap-20">
        <div className=" w-full flex flex-col justify-center items-start gap-2">
          <p className="font-sans font-thin italic text-2xl lg:text-[32px] text-black-80 dark:text-off-white p-0">
            Hello,
          </p>
          <p className="font-sans font-thin italic text-2xl lg:text-[32px] text-black-80 dark:text-off-white p-0">
            I'm nuttida Nualnooch
          </p>
          <p className="font-sans font-thin italic text-[16px] text-black-80 dark:text-off-white">
            A front-end developer, who passionate about bringing idea to life
          </p>
        </div>

        <ThemeButton />
      </div>

      <div className="flex-1 w-full h-full flex flex-col justify-center items-start gap-10">
        {menuList.map((menu) => (
          <Menu
            key={menu.name}
            menu={menu.name}
            path={menu.path}
            color={menu.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
