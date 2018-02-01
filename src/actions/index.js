import * as actionTypes from "./types";

export const onCreateCard = (title, post) => {
  return {
    type: actionTypes.CREATE_CARD,
    payload: {
      title,
      post
    }
  };
};

export const onDeleteCard = id => {
  return {
    type: actionTypes.DELETE_CARD,
    payload: id
  };
};
