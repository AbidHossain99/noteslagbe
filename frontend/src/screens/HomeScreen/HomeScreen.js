import React from "react";
import MainScreen from "../../components/MainScreen";
import Button from "react-bootstrap/Button";

const HomeScreen = () => {
  return (
    <MainScreen title="Welcome to Notes Lagbe">
      <div className="d-grid gap-2">
        <a href="/mynotes">
          <Button variant="dark" size="lg">
            Your Notepad
          </Button>
        </a>
        <a href="/todos">
          <Button variant="dark" size="lg">
            Homework Alert
          </Button>
        </a>
        <a href="/uploadnotes">
          <Button variant="dark" size="lg">
            Notes Collection
          </Button>
        </a>
        <a href="/courses">
          <Button variant="dark" size="lg">
            Get free Courses with Certificates
          </Button>
        </a>
        <a href="/profile">
          <Button variant="dark" size="lg">
            Your Profile
          </Button>
        </a>
        <Button variant="dark" size="lg">
          About Us
        </Button>
        <Button variant="dark" size="lg">
          Social Media
        </Button>
        <a href="/">
          <Button variant="danger" size="lg">
            Logout
          </Button>
        </a>
      </div>
    </MainScreen>
  );
};

export default HomeScreen;
