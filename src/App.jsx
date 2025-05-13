import "./App.css";
import BooksCard from "./components/BooksCard";
import TopBar from "./components/TopBar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <TopBar />
      <Welcome />
      <BooksCard />
    </>
  );
}

export default App;
