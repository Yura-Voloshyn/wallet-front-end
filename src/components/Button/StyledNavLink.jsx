import { StyledNavLink } from './SubmitBtn.styled';

const NavLink = ({ btnText, to }) => {
  return <StyledNavLink to={to}>{btnText}</StyledNavLink>;
};

export default NavLink;
