import { useMedia } from 'react-use';
import { useLocation } from 'react-router-dom';
import frameLogbig from '../../images/frameLogbig.png';
import frameLogtab from '../../images/frameLogtab.png';
import frameRegbig from '../../images/frameRegbig.png';
import frameRegtab from '../../images/frameRegtab.png';
import LoginForm from 'components/LoginForm';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import LoginImage from './LoginImage';
import RegisterImage from './RegisterImage';
import { Container, FormContainer, Wrapper } from './LoginPage.styled';

const LoginPage = () => {
  const isWideMobie = useMedia('(max-width: 767px)');
  const isWideTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  const isWideСomputer = useMedia('(min-width: 1280px)');
  const location = useLocation();
  return (
    <>
      {isWideMobie ? (
        <Container>
          <Wrapper>
            {location.pathname === '/login' ? (
              <LoginForm />
            ) : (
              <RegistrationForm />
            )}
          </Wrapper>
        </Container>
      ) : null}
      {isWideTablet ? (
        <Wrapper>
          {location.pathname === '/login' ? (
            <Container>
              <LoginImage image={frameLogtab} />
              <FormContainer>
                {location.pathname === '/login' ? (
                  <LoginForm />
                ) : (
                  <RegistrationForm />
                )}
              </FormContainer>
            </Container>
          ) : (
            <Container>
              <RegisterImage image={frameRegtab} />
              <FormContainer>
                {location.pathname === '/login' ? (
                  <LoginForm />
                ) : (
                  <RegistrationForm />
                )}
              </FormContainer>
            </Container>
          )}
        </Wrapper>
      ) : null}

      {isWideСomputer ? (
        <Container>
          <Wrapper>
            {location.pathname === '/login' ? (
              <LoginImage image={frameLogbig} />
            ) : (
              <RegisterImage image={frameRegbig} />
            )}
            <FormContainer>
              {location.pathname === '/login' ? (
                <LoginForm />
              ) : (
                <RegistrationForm />
              )}
            </FormContainer>
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
};

export default LoginPage;
