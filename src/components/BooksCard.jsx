import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FantasyBooks from "../../books/fantasy.json";
import { Col, Container, Row } from "react-bootstrap";

function BooksCard() {
  return (
    <Container fluid>
      <Row className="g-4">
        {FantasyBooks.map(book => (
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

export default BooksCard;
