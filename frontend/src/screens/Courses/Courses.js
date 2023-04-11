import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    axios
      .get("/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  const enrollNowHandler = (_id) => {
    localStorage.setItem("enrolledCourseId", _id);
    navigate(`/course/enrolledCourses/${_id}`);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">
        Welcome {userInfo.name} to Course Collection..
      </h1>
      <hr />
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course._id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={course.picture}
                className="card-img-top"
                style={{ width: "410px", height: "300px" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-auto">{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <button
                  className="btn btn-primary"
                  onClick={() => enrollNowHandler(course._id)}
                >
                  Enroll Now
                </button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
