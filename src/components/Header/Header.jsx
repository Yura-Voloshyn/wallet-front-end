import { Logo } from 'components/Logo/Logo';
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
  return (
    <HeaderWrapper>
      <Logo />

      <UserMenu>
        <Username>Name</Username>
        <LogoutBtn>
          <Logout src={logoutIcon} alt="logout" />
          <LogoutText>Exit</LogoutText>
        </LogoutBtn>
      </UserMenu>
    </HeaderWrapper>
  );
};
