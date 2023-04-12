import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Todo from "./screens/Todo/Todo";
import Courses from "./screens/Courses/Courses";
import EnrolledCourses from "./screens/Courses/enrolledCourses";
import UploadNotes from "./screens/UploadNotes/UploadNotes";
import ViewNotes from "./screens/UploadNotes/ViewNotes";
//import messages from "./screens/messages/messages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/home" Component={HomeScreen} />
        <Route path="/login" Component={LoginScreen} />
        <Route path="/profile" Component={ProfileScreen} />
        <Route path="/register" Component={RegisterScreen} />
        <Route path="/createnote" Component={CreateNote} />
        <Route path="/note/:id" Component={SingleNote} />
        <Route path="/mynotes" Component={() => <MyNotes />} />
        <Route path="/todos" Component={Todo} />
        <Route path="/courses" Component={Courses} />
        <Route path="/course/enrolledCourses/:id" Component={EnrolledCourses} />
        <Route path="/uploadnotes" Component={UploadNotes} />
        <Route path="/uploadnotes/ViewNotes" Component={ViewNotes} />
        {/*<Route path="/messages" Component={messages} /> */}
        {/*<Route path="/homeworkalert" Component={Homework_alert} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
