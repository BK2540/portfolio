import ThemeButton from "@components/button/ThemeButton";

function App() {
  return (
    <>
      <h1
        className={
          "text-3xl font-bold underline text-red-200 dark:text-red-600"
        }
      >
        Theme
        <ThemeButton />
      </h1>
    </>
  );
}

export default App;
