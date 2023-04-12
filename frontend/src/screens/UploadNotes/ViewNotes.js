import React, { useState, useEffect } from "react";
import axios from "axios";
import MainScreen from "../../components/MainScreen";
import { Card } from "react-bootstrap";

const ViewNotes = () => {
  const [url, setUrl] = useState([]);

  useEffect(() => {
    const fetchurl = async () => {
      try {
        const response = await axios.get("http://localhost:5000/uploadnotes/");
        setUrl(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchurl();
  }, []);

  return (
    <MainScreen title={"Notes Collection"}>
      <h3>You can Simply copy this link and paste it as a URL</h3>
      <hr />
      {url.reverse().map((item) => (
        <div key={item._id}>
          <Card>
            <img src={item.url} alt=""></img>
          </Card>
        </div>
      ))}
    </MainScreen>
  );
};

export default ViewNotes;
