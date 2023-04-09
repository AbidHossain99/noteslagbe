import React, { useState } from "react";
import MainScreen from "../MainScreen";
import "./homework_alert.css";
import { addNewHW } from "../../actions/hwActions";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";

const Homework_alert = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewHW(text));
    setText("");
  };

  return (
    <MainScreen title="Homework Alert">
      <Form onSubmit={onFormSubmit}>
        <Form.Group controlId="formBasicText">
          <Form.Label>Add Task Here</Form.Label>
          <Form.Control
            type="text"
            value={text}
            placeholder="Enter your task here"
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
      </Form>
    </MainScreen>
  );
};

export default Homework_alert;
