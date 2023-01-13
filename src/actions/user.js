import { GET_USER } from "./types";

const getUser = (text) => (dispatch) => {
  dispatch({
    type: GET_USER,
    payload: "User_One",
  });
};

export { getUser };
