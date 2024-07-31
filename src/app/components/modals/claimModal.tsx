
import { Button, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";

// eslint-disable-next-line react/display-name
export const ClaimModal = React.forwardRef((props, modalRef) => {
  const [openModal, setOpenModal] = useState(false);

  const open = () => {
    setOpenModal(true);
  }

  const close = () => {
    setOpenModal(false);
  }

  return (
    <>
      <Button ref={modalRef} className="hidden" onClick={open}></Button>
      <Modal show={openModal} className={openModal ? 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80' : 'closed' } onClose={() => setOpenModal(false)} dismissible onClick={close}>
        <Modal.Body className="p-20">
          <span>Hello</span>
        </Modal.Body>
      </Modal>
    </>
  );
})
