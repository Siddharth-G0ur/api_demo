import { GET_SINGLE_USER } from "../actions/types";
const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SINGLE_USER:
      return payload;
    default:
      return state;
  }
}
