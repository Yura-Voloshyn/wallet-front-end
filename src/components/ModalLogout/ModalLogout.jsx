import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperation';
import { Overlay, Content, Text, BtnWrapper } from './ModalLogout.styled';
import { ModaLogoutBtn } from './ModaLogoutBtn/ModaLogoutBtn';

export const ModalLogout = ({ onClose }) => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());

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
            onClick={onLogout}
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
