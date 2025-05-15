import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComment = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0ODkyZDFjMjUwNDAwMTUxYWI2ODMiLCJpYXQiOjE3NDczMTQ0NTgsImV4cCI6MTc0ODUyNDA1OH0._90MIGE-29rZ28aoJH0XVzy18Hgg5sratRz_uDdj1NU",
        },
      });
      if (response.ok) {
        const comments = await response.json();

        this.setState({ comments }, () => {});
      } else {
        throw new Error("Errore nel reperimento dei commenti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    console.log("componentDidMount()");
    this.fetchComment();
  }

  render() {
    return (
      <>
        <CommentList comments={this.state.comments} />
        <AddComment comments={this.state.comments} />
      </>
    );
  }
}

export default CommentArea;
