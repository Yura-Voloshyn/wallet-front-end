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
  margin: 0 auto;
  max-height: 540px;
  top: 60px;
  background-color: #fff;
  @media screen and (max-width: 768px){
    max-height: 600px;
    width: 100%; 
    /* padding: 20px 10px 268px 10px; */
    padding: 20px 0px 268px 0px;
  }
  @media screen and (min-width: 768px) {
    max-height: 508px;
    min-width: 500px;
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