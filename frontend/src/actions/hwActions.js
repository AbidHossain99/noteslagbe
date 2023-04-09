import axios from "axios";
import { ADDNEWHW, GETALLHW } from "./type";

const API_URL = "http://localhost:5000";

export const addNewHW = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/homeworks`, { data });

    dispatch({ type: ADDNEWHW, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewTodo API ", error.message);
  }
};

export const getAllHW = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/homeworks`);

    dispatch({ type: GETALLHW, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};
