import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { selectUser } from "./features/userSlice";
import { delete_blog } from "./features/userSlice";

function BlogPage() {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteBtn = (index) => {
    if (user.length === 1) {
      dispatch(delete_blog(index));
      navigate("/");
    } else {
      dispatch(delete_blog(index));
    }
  };
  const emptyBtn = () => {
    dispatch(delete_blog());
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {user.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>
              <button className="btn btn-sm btn-primary">Edit</button>
              <Button
                color="danger"
                className="btn btn-sm"
                onClick={() => deleteBtn(index)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td></td>
          <td>
            {user.length >= 1 && (
              <button className="btn btn-sm btn-danger" onClick={emptyBtn}>
                Empty Blog
              </button>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BlogPage;
