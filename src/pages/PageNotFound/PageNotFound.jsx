import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <h1 style={{ paddingTop: '20px' }}>Page not found</h1>
      <Link to="/home">To main page</Link>
    </main>
  );
};
export default PageNotFound;
