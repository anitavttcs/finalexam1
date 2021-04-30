import './App.css';
import "./main.css";
//import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="App">
      <Menu />

      <div className="container">
        <h1>Jelentkezés</h1>
        <input type="text" placeholder="Név" />
        <input type="email" placeholder="Email cím" />
        <input type="tel" placeholder="Telefonszám" />
        <div>
          <input type="checkbox" /> Elolvastam és elfogadom az <span>Adatkezelési tájékoztatót.</span>
        </div>

        <button onClick={() => handleShow()}>ELKÜLD</button>


        {/* <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is a Bootstrap modal</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal> */}
      </div>

    </div>
  );
}

export default App;
