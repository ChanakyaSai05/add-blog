import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { add_blog } from "./features/userSlice";
import "./InputForm.css";
function InputForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addblog = (e) => {
    e.preventDefault();
    dispatch(
      add_blog({
        title: title,
        description: description,
      })
    );
    navigate("/blogpage");
    setTitle("");
    setDescription("");
  };
  return (
    <div className="form-container">
      <h1 style={{ textAlign: "center" }}>ADD BLOG</h1>
      <Form>
        <FormGroup>
          <Label for="exampleText">TITLE</Label>
          <Input
            id="exampleText"
            name="email"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">DESCRIPTION</Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" onClick={addblog}>
          ADD BLOG
        </Button>
      </Form>
    </div>
  );
}

export default InputForm;
