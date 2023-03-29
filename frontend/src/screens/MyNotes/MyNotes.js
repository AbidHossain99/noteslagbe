import React, { useEffect, useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import axios from "axios";

function MyNotes() {
  const [notes, setnotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setnotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      {["Dark"].map((variant) => (
        <MainScreen title="Welcome to Notes Collection..">
          <Link to="/createnote">
            <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
              Create New Note
            </Button>
          </Link>
          {notes.map((note) => (
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey={note._id}>
                <Card
                  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === "light" ? "dark" : "white"}
                  className="mb-2"
                >
                  <Accordion.Header style={{ display: "flex" }}>
                    <span
                      style={{
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                      }}
                    >
                      {note.title}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <div>
                      <Button href={`/note/${note._id}`}>Edit</Button>
                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteHandler(note._id)}
                      >
                        Delete
                      </Button>
                    </div>
                    <p>{note.content}</p>
                  </Accordion.Body>
                </Card>
              </Accordion.Item>
            </Accordion>
          ))}
        </MainScreen>
      ))}
      ;
    </>
  );
}

export default MyNotes;
