import { StyledNavLink } from './SubmitBtn.styled';

const NavLink = ({ btnText, onClick }) => {
  return <StyledNavLink onClick={onClick}>{btnText}</StyledNavLink>;
};

export default NavLink;
