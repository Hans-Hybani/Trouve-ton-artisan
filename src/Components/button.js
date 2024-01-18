import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Buton({ onSendEmail }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleYesClick = (e) => {
    if (onSendEmail) {
      onSendEmail(e);
    }
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Envoyer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message de confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Merci d'avoir fait le choix de cette artisan.<br/>
         En valider voitre choix <strong>Une réponse sera apportée sous 48h.</strong><br/>
         <span className='green'>Oui, pour valider.</span><br/>
         <span className='red'>Non, pour faire un autre choix</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            NON
          </Button>
          <Button variant="success" onClick={handleYesClick}>
            OUI
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Buton;