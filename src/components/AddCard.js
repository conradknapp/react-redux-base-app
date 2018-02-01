import React, { Component } from "react";

class AddCard extends Component {
  state = {
    title: "",
    post: ""
  };

  onTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  onPostChange = event => {
    this.setState({
      post: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.createCard(this.state.title, this.state.post);
    this.setState({
      post: "",
      title: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={this.onTitleChange}
          value={this.state.title}
        />
        <input
          type="text"
          placeholder="Post"
          onChange={this.onPostChange}
          value={this.state.post}
        />
        <button>Create Card</button>
      </form>
    );
  }
}

export default AddCard;
