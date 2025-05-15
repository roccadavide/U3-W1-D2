import "./App.css";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import TopBar from "./components/TopBar";
import Welcome from "./components/Welcome";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <TopBar />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
