import styled from '@emotion/styled';
import { useState } from 'react';
import ModalMoreInformations from './ModalMoreInformations';

const Link = styled.a`
  margin-left: 5px;
  color: rgba(255, 101, 150, 1);
  cursor: pointer;
  &:hover {
    color: rgba(36, 204, 167, 1);
  }
`;
const TextModal = styled.p`
  color: rgba(0, 0, 0, 1);
  font-family: 'Circe Bold';
  font-style: normal;
  font-size: 18px;
  text-align: center;
`;

const ReadMoreComment = ({ text }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return text.length <= 18 ? (
    text
  ) : (
    <>
      {text.slice(0, 18)}
      <Link onClick={() => openModal()}>{'...'}</Link>
      {modalIsOpen && (
        <ModalMoreInformations onClose={closeModal}>
          <TextModal>{text}</TextModal>
        </ModalMoreInformations>
      )}
    </>
  );
};

export default ReadMoreComment;
