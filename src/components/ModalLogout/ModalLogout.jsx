import { Overlay, Content, Text } from './ModalLogout.styled';
import { ModaLogoutBtn } from './ModaLogoutBtn';

export const ModalLogout = () => {
  return (
    <Overlay>
      <Content>
        <Text>Do you really want to log out?</Text>
        <ModaLogoutBtn
          bgColor="#24CCA7"
          text="Yes, Log Out"
          onClick={() => console.log('Logout')}
        />
        <ModaLogoutBtn
          bgColor="#FFFFFF"
          text="Cancel"
          onClick={() => console.log('Cancel')}
        />
      </Content>
    </Overlay>
  );
};
