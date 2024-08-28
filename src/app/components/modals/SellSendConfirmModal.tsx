
import { Button, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";

interface IProps {
  action: string;
  onConfirm: () => void;
}

// eslint-disable-next-line react/display-name
export const SellSendConfirmModal = React.forwardRef((props: IProps, modalRef) => {
  const [openModal, setOpenModal] = useState(false);

  const open = () => {
    setOpenModal(true);
  }

  const close = () => {
    setOpenModal(false);
  }

  

  return (
    <>
       {/* @ts-ignore */}
      <Button ref={modalRef} className="hidden" onClick={() => setOpenModal(!openModal)}></Button>
      <Modal show={openModal} className={openModal ? 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 p-10 z-10' : 'closed' } onClose={() => setOpenModal(false)}>
        <Modal.Body className="p-10 z-10">
          <span className="text-center flex font-bold text-xl">Are you sure you want to {props.action}?</span>
        </Modal.Body>
        <Modal.Footer className="justify-between border-none items-center px-5 pb-5">
            <button type="button" className="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-3xl text-xs p-2 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700 dark:border-red-700" onClick={close}>No</button>
            <button type="button" className="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={props.onConfirm}>Yes</button>
        </Modal.Footer>
      </Modal>
    </>
  );
})
