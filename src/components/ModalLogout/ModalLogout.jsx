import { useEffect } from 'react';
import { Overlay, Content, Text, BtnWrapper } from './ModalLogout.styled';
import { ModaLogoutBtn } from './ModaLogoutBtn';

export const ModalLogout = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEscPress = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Content>
        <Text>Do you really want to log out?</Text>

        <BtnWrapper>
          <ModaLogoutBtn
            bgColor="#24CCA7"
            textColor="#FFFFFF"
            text="Yes, Log Out"
            onClick={() => console.log('Logout')}
          />
          <ModaLogoutBtn
            bgColor="#FFFFFF"
            textColor="#24CCA7"
            text="Cancel"
            onClick={onClose}
          />
        </BtnWrapper>
      </Content>
    </Overlay>
  );
};
