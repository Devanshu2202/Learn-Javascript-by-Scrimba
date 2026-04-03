import "./App.css";
import Header from "./components/Header";
import Maintext from "./components/Maintext";

function App() {
  // useEffect(() => {
  //   generateRecipe();
  // }, []);

  return (
    <div className="bg-[#FAFAF8]">
      <Header />
      <div className="max-w-7xl px-5 xl:px-0 m-auto py-24 ">
        <Maintext />
      </div>
    </div>
  );
}

export default App;
