import React, { useState } from "react";
import MainScreen from "../../components/MainScreen";
import { useNavigate } from "react-router-dom";
import "./UploadNotes.css"; // import the CSS file

const UploadNotes = () => {
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "noteslagbe");
    data.append("cloud_name", "djcwxrm60");

    fetch("https://api.cloudinary.com/v1_1/djcwxrm60/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url.toString());
        Image = data.url;
        data = fetch("http://127.0.0.1:3000/note/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: Image,
          }),
        }).then((res) => res.json());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const newImage = Image;

  localStorage.setItem("notesURL", newImage);

  return (
    <MainScreen title={"Share Notes"}>
      <div className="upload-notes-container">
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={submitImage}>Upload</button>
        <img src={newImage} alt="" />
        <a href="/uploadnotes/ViewNotes">
          <button>Make it available for others</button>
        </a>
      </div>
    </MainScreen>
  );
};

export default UploadNotes;
