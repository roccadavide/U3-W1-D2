import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      <ListGroup className="mb-4">
        <Card.Title className="fw-bold mb-4 text-center">Recensioni 👇</Card.Title>
        {this.props.comments.length > 0 ? (
          this.props.comments.map(comment => (
            <ListGroup.Item key={comment._id}>
              {comment.comment} - <strong>{comment.rate}/5</strong>
            </ListGroup.Item>
          ))
        ) : (
          <p>Non ci sono recensioni!</p>
        )}
      </ListGroup>
    );
  }
}

export default CommentList;
