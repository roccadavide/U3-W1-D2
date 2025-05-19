import { Component } from "react";
import SingleBook from "./SingleBook";
import { Button, Col, Form, Row } from "react-bootstrap";
import FantasyBooks from "../../books/fantasy.json";
import HistoryBooks from "../../books/history.json";
import RomanceBooks from "../../books/romance.json";
import HorrorBooks from "../../books/horror.json";
import ScifiBooks from "../../books/scifi.json";

class BookList extends Component {
  state = {
    searchQuery: "",
    collection: FantasyBooks,
  };

  render() {
    return (
      <>
        <div>
          <div>
            <h1 className="text-center">Seleziona la categoria:</h1>
          </div>
          <div className="btnDiv">
            <Button className="categoryBtn" variant="success" onClick={() => this.setState({ collection: FantasyBooks })}>
              Fantasy
            </Button>
            <Button className="categoryBtn" variant="danger" onClick={() => this.setState({ collection: HistoryBooks })}>
              History
            </Button>
            <Button className="categoryBtn" variant="warning" onClick={() => this.setState({ collection: RomanceBooks })}>
              Romance
            </Button>
            <Button className="categoryBtn" variant="info" onClick={() => this.setState({ collection: HorrorBooks })}>
              Horror
            </Button>
            <Button className="categoryBtn" variant="secondary" onClick={() => this.setState({ collection: ScifiBooks })}>
              Scifi
            </Button>
          </div>
        </div>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={e => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {this.state.collection
            .filter(b => b.title.toLowerCase().includes(this.state.searchQuery))
            .map(b => (
              <Col xs={12} md={4} key={b.asin}>
                <SingleBook book={b} onBookSelect={this.props.onBookSelect} isSelected={this.props.selectedBook?.asin === b.asin} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
