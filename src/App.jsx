import "./App.css";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import TopBar from "./components/TopBar";
import Welcome from "./components/Welcome";
import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  state = {
    selectedBook: null,
  };

  handleBookSelect = book => {
    if (this.state.selectedBook?.asin === book.asin) {
      this.setState({ selectedBook: null });
    } else {
      this.setState({ selectedBook: book });
    }
  };
  render() {
    return (
      <>
        <TopBar />
        <Welcome />
        <Container>
          <Row>
            <Col xs={8}>
              <BookList onBookSelect={this.handleBookSelect} selectedBook={this.state.selectedBook} />
            </Col>
            <Col xs={4}>
              <CommentArea selectedBook={this.state.selectedBook} />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default App;
