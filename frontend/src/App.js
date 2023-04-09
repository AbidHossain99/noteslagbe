import "./App.css";
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
import Homework_alert from "./components/Homework/homework_alert";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

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
        <Route path="/homeworkalert" Component={Homework_alert} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
