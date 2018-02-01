import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onCreateCard, onDeleteCard } from "../actions/index";

import AddCard from "../components/AddCard";
import Card from "../components/Card";

class Main extends Component {
  render() {
    return (
      <main>
        <h1>Main</h1>
        <AddCard createCard={this.props.onCreateCard} />
        {this.props.cds.map(card => (
          <Card
            clicked={() => this.props.onDeleteCard(card.id)}
            key={card.id}
            title={card.title}
            post={card.post}
          />
        ))}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    cds: state.cds.cards
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onCreateCard,
      onDeleteCard
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
