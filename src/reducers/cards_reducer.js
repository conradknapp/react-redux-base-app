import * as actionTypes from "../actions/types";

const INITIAL_STATE = {
  cards: []
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CREATE_CARD:
      const newCard = {
        id: Date.now(),
        title: action.payload.title,
        post: action.payload.post
      };
      return {
        ...state,
        cards: state.cards.concat(newCard)
      };
    case actionTypes.DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(el => el.id !== action.payload)
      };
    default:
      return state;
  }
};
