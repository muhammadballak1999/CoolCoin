
import { Button, Modal } from "flowbite-react";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import lottie from 'lottie-web';

interface IProps {
  onClose: () => void;
}

// eslint-disable-next-line react/display-name
export const ClaimModal = React.forwardRef((props: IProps, modalRef) => {
  const [openModal, setOpenModal] = useState(false);
  const claimAnimationContainer = useRef(null);

  const open = () => {
    setOpenModal(true);
    claim();
  }

  const close = () => {
    setOpenModal(false);
    props.onClose()
  }

  const claim = () => {
    const animation = lottie.loadAnimation({
      container: claimAnimationContainer.current!,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/animations/Congrats.json'
    });

    animation.addEventListener('complete', () => {
      animation.destroy();
    });
  };
  

  return (
    <>
       {/* @ts-ignore */}
      <Button ref={modalRef} className="hidden" onClick={open}></Button>
      <Modal show={openModal} className={openModal ? 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 z-10' : 'closed' } onClose={() => setOpenModal(false)} dismissible onClick={close}>
        <Modal.Body className="p-20 z-10">
          <span className="text-center flex font-bold text-xl">🎉 <br /> Claimed</span>
        </Modal.Body>
      </Modal>
      <div className="absolute top-[25%] z-20" ref={claimAnimationContainer}></div>
    </>
  );
})
