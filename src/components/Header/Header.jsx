import { useState } from 'react';
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

  return (
    <HeaderWrapper>
      <Logo />

      <UserMenu>
        <Username>Name</Username>
        <LogoutBtn onClick={() => setIsShowModalLogout(true)}>
          <Logout src={logoutIcon} alt="logout" />
          <LogoutText>Exit</LogoutText>
        </LogoutBtn>
      </UserMenu>

      {isShowModalLogout && <ModalLogout />}
    </HeaderWrapper>
  );
};
