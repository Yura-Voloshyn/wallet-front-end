import { StyledNavLink } from './SubmitBtn.styled';

const NavLink = ({ btnText, onClick, to }) => {
  return (
    <StyledNavLink onClick={onClick} to={to}>
      {btnText}
    </StyledNavLink>
  );
};

export default NavLink;
