import { LogoIcon, LogoTitle, LogoWrapper } from './Logo.styled';
import logo from '../../images/icons/logo.svg';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoIcon src={logo} alt="logo" />
      <LogoTitle>Wallet</LogoTitle>
    </LogoWrapper>
  );
};
