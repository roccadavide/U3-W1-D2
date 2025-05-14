import "./App.css";
import BooksCard from "./components/BooksCard";
import MyFooter from "./components/MyFooter";
import SingleBook from "./components/SingleBook";
import TopBar from "./components/TopBar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <TopBar />
      <Welcome />
      <SingleBook category="Scifi" />
      <MyFooter />
    </>
  );
}

export default App;
