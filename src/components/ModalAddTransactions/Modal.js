import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled'



const ModalBackdrop = styled.div`
@media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.25);
    }
`;

const ModalContent = styled.div`
  position: absolute;
  /* box-sizing: content-box; */
  margin: 0 auto;
  /* width: 100%;  */
  min-height: 540px;
  top: 60px;
  background-color: #fff;
  @media screen and (max-width: 767px){
    padding: 0px 10px 145px 10px;
  }
  @media screen and (min-width: 768px) {
    height: 603px;
    max-width: 540px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 20px 60px 20px;
    border-radius: 20px;
  }
`;


const modalRoot = document.querySelector('#root');

export default function Modal({ onClose, children }) {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleBackdropClick = useCallback(
        event => {
            if (event.currentTarget === event.target) {
                onClose();
            }
        },
        [onClose],
    );

    return createPortal(
        <ModalBackdrop onClick={handleBackdropClick}>
            <ModalContent onClose={onClose}>{children}</ModalContent>
        </ModalBackdrop>,
        modalRoot,
    );
}