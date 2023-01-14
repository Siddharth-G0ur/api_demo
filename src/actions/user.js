import { GET_USER } from "./types";
import axios from "axios";

const getUser = () => async (dispatch) => {
  try {
    const res = await axios.get("https://reqres.in/api/users");
    dispatch({
      type: GET_USER,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getUser };
