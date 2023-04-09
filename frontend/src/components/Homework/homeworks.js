import React, { useEffect } from "react";
import { getAllHW } from "../../actions/hwActions";
import { useDispatch } from "react-redux";

const Homeworks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHW);
  }, []);

  return <h1>Hello from homeworks.js</h1>;
};

export default Homeworks;
