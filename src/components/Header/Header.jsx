import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Logo } from 'components/Logo/Logo';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import {
  HeaderWrapper,
  UserMenu,
  Username,
  LogoutBtn,
  Logout,
  LogoutText,
} from './Header.styled';
import logoutIcon from '../../images/icons/logout-icon.svg';

export const Header = () => {
  const [isShowModalLogout, setIsShowModalLogout] = useState(false);
  const username = useSelector(state => state.auth.user.name);

  const handleCloseModal = () => setIsShowModalLogout(false);

  return (
    <HeaderWrapper>
      <Logo />

      <UserMenu>
        <Username>{username}</Username>
        <LogoutBtn onClick={() => setIsShowModalLogout(true)}>
          <Logout src={logoutIcon} alt="logout" />
          <LogoutText>Exit</LogoutText>
        </LogoutBtn>
      </UserMenu>

      {isShowModalLogout && <ModalLogout onClose={handleCloseModal} />}
    </HeaderWrapper>
  );
};
