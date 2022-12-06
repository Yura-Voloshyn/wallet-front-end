import RegistrationForm from 'components/RegistrationForm';
import { useMedia } from 'react-use';

const RegistrationPage = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  const isDesktop = useMedia('(min-width: 1280px)');

  return (
    <>
      {isMobile ? <RegistrationForm /> : null}
      {isTablet ? (
        <div>
          <h1>Finance App</h1>
          <RegistrationForm />
        </div>
      ) : null}
      {isDesktop ? <h1>booooo</h1> : null}
    </>
  );
};

export default RegistrationPage;
