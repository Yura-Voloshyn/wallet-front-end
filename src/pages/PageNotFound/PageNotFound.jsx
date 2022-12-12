import NavLink from 'components/Button/StyledNavLink';
const PageNotFound = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <h1 style={{ paddingTop: '20px' }}>Page not found</h1>
      <NavLink btnText={'home'} to={'/home'}>
        To main page
      </NavLink>
    </main>
  );
};
export default PageNotFound;
