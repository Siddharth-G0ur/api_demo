import { GET_USER } from "./types";
import axios from "axios";

const getUser = () => async (dispatch) => {
  try {
    const res = await axios.get("https://reqres.in/api/users?page=2");
    dispatch({
      type: GET_USER,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getUser };
