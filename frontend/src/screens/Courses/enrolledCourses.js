import React, { useState, useEffect } from "react";
import axios from "axios";
import MainScreen from "../../components/MainScreen";
import Card from "react-bootstrap/Card";

const EnrolledCourses = () => {
  const [course, setCourse] = useState();

  useEffect(() => {
    const enrolledCourseId = localStorage.getItem("enrolledCourseId");
    console.log(enrolledCourseId);
    axios
      .put(`/course/enrolledCourses/${enrolledCourseId}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <MainScreen title={"Enrolled Courses"}>
      <h1>You have enrolled in {course.title}!</h1>
      <Card>
        <Card.Img
          variant="top"
          src={course.picture}
          className="card-img-top"
          style={{ width: "410px", height: "300px" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-auto">{course.title}</Card.Title>
          <Card.Text>{course.description}</Card.Text>
        </Card.Body>
        <iframe
          width="1280"
          height="720"
          src={course.content}
          title="Introduction"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Card>
    </MainScreen>
  );
};

export default EnrolledCourses;
