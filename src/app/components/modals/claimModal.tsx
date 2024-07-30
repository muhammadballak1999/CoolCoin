
import { Button, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";

// eslint-disable-next-line react/display-name
export const ClaimModal = React.forwardRef((props, modalRef) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button ref={modalRef} className="visibility-hidden" onClick={() => setOpenModal(true)}></Button>
      <Modal show={openModal} className={openModal ? 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80' : 'closed' } onClose={() => setOpenModal(false)} dismissible>
        <Modal.Body>
        </Modal.Body>
      </Modal>
    </>
  );
})
