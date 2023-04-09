import React, { useEffect } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

function MyNotes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    navigate,
    successCreate,
    userInfo,
    successUpdate,
    successDelete,
  ]);

  return (
    <>
      {["Dark"].map((variant) => (
        <MainScreen title={`Welcome ${userInfo.name} to Notes Collection..`}>
          <Link to="/createnote">
            <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
              Create New Note
            </Button>
          </Link>
          {errorDelete && (
            <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
          )}
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          {loadingDelete && <Loading />}
          {notes?.reverse().map((note) => (
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
