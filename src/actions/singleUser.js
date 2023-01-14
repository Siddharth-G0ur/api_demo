import { GET_SINGLE_USER } from "./types";
import axios from "axios";

const getSingleUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    dispatch({
      type: GET_SINGLE_USER,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getSingleUser };
