import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled'



const ModalBackdrop = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.25);
`;

const ModalContent = styled.div`
  position: absolute;
  margin: auto;
  background-color: rgba(250, 250, 250, 0.9);
  @media screen and (max-width: 767px){
    border-radius: 20px;
    top: 50%;
    padding: 5px;
  }
  @media screen and (min-width: 768px) {
    min-width: 500px;
    top: 250px;
    right: 0;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 20px;
  }
`;


const modalRoot = document.querySelector('#root');

export default function ModalMoreInformations({ onClose, children }) {
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
