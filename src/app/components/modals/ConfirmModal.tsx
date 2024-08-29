
import { Button, Modal } from "flowbite-react";
import React, { useRef } from "react";
import { useState } from "react";
import lottie from 'lottie-web';
import { toast } from 'react-toastify';


interface IProps {
  eventType: string;
  message?: string;
  onConfirm: () => void;
}

// eslint-disable-next-line react/display-name
export const ConfirmModal = React.forwardRef((props: IProps, modalRef) => {
  const [openModal, setOpenModal] = useState(false);
  const claimAnimationContainer = useRef(null);

  const open = () => {
    setOpenModal(true);
    claim();
  }

  const close = () => {
    setOpenModal(false);
  }

  const claim = () => {
    props.onConfirm();
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

  const copy = (event: any) => {
    event.stopPropagation();
    navigator.clipboard.writeText(props.message!);
    toast('Link Copied to Clipboard', { type: 'success' });
  }
  

  return (
    <>
       {/* @ts-ignore */}
      <Button ref={modalRef} className="hidden" onClick={open}></Button>
      <Modal show={openModal} className={openModal ? 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 z-10' : 'closed' } onClose={() => setOpenModal(false)} dismissible onClick={close}>
        <Modal.Body className="flex flex-col items-center justify-center p-10 z-10 max-w-[300px] shadow-none">
        {props.eventType !== 'Sent' 
          ?
          <span className="text-center flex font-bold text-xl">🎉 <br /> { props.eventType }</span>
          :
          <span className="text-center flex font-bold text-xl">Copy below code and sent it to the recepient player</span> 
        }
          { props.eventType === 'Sent'
          ?
          <div className="flex flex-row items-center justify-center shadow-none px-5 mt-2 border" onClick={copy}>
             <span className="text-ellipsis text-nowrap overflow-hidden text-xs w-28">{ props.message }</span>
             <button type="button" className="focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"/>
                </svg>
            </button>
          </div>
          :
          <></>
          }
        </Modal.Body>
      </Modal>
      <div className="absolute top-[25%] z-20" ref={claimAnimationContainer}></div>
    </>
  );
})
