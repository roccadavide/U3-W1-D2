import { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comments: {
      _id: "",
      comment: "",
      rate: "",
    },
  };

  handleReset = () => {
    this.setState({
      comments: {
        _id: "",
        comment: "",
        rate: "",
      },
    });
  };

  handleChange = (propertyName, propertyValue) => {
    this.setState({ comments: { ...this.state.comments, [propertyName]: propertyValue } });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "POST",
      body: JSON.stringify(this.state.comments),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resp => {
        if (resp.ok) {
          this.handleReset();
          return resp.json();
        } else {
          throw new Error("Invio fallito");
        }
      })
      .then(savedComments => {
        console.log("commento salvato", savedComments);
      })
      .catch(err => {
        console.log("catch", err);
      });
  };

  render() {
    return (
      <Container fluid>
        <h2>Scrivi una recensione ✒️</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="comment">
            <Form.Label>Recensione:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi qui la tua recensione!"
              value={this.state.comments.comment}
              onChange={e => this.handleChange("comment", e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="rate">
            <Form.Select
              aria-label="rate"
              value={this.state.comments.rate}
              onChange={e => {
                this.handleChange("rate", e.target.value);
              }}
              required
            >
              <option value="1">Uno</option>
              <option value="2">Due</option>
              <option value="3">Tre</option>
              <option value="4">Quattro</option>
              <option value="5">Cinque</option>
            </Form.Select>
          </Form.Group>
          <div>
            <Button variant="info" type="submit">
              Invia recensione!
            </Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default AddComment;
