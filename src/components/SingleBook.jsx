import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FantasyBooks from "../../books/fantasy.json";
import HistoryBooks from "../../books/history.json";
import RomanceBooks from "../../books/romance.json";
import HorrorBooks from "../../books/horror.json";
import ScifiBooks from "../../books/scifi.json";
import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selectedAsin: null,
    collection: FantasyBooks,
  };

  handleCardClick = asin => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <Container fluid>
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
        <Row className="g-4">
          {this.state.collection.map(book => (
            <Col xs={12} md={4} lg={3} key={book.asin}>
              <Card className={`h-100 ${this.state.selectedAsin === book.asin ? "selected-card" : ""}`} onClick={() => this.handleCardClick(book.asin)}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    Questo è un libro di categoria {book.category} e costa {book.price}$
                  </Card.Text>
                  <Button variant="primary">Aggiungi al carrello</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default SingleBook;

/*
const bookCategories = {
    Fantasy: FantasyBooks,
    History: HistoryBooks,
    Romance: RomanceBooks,
    Horror: HorrorBooks,
    Scifi: ScifiBooks,
  };
  
  function SingleBook(props) {
    const selectedBooks = bookCategories[props.category] || [];
  
    return (
      <Container fluid>
        <Row className="g-4">
          {selectedBooks.map(book => (
            <Col xs={12} md={4} lg={3} key={book.asin}>
              <Card className="h-100">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    Questo è un libro di categoria {book.category} e costa {book.price}$
                  </Card.Text>
                  <Button variant="primary">Aggiungi al carrello</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default SingleBook; */
