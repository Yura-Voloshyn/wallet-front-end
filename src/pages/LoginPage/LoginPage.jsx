import { useMedia } from 'react-use';
import { useLocation } from 'react-router-dom';
import frameLogbig from '../../images/frameLogbig.png';
import frameLogtab from '../../images/frameLogtab.png';
import frameRegbig from '../../images/frameRegbig.png';
import frameRegtab from '../../images/frameRegtab.png';
import LoginForm from 'components/LoginForm';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import {
  Container,
  ImageContainer,
  FormContainer,
  Wrapper,
  Text,
  Frame,
} from './LoginPage.styled';

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
        <Container>
          <Wrapper>
            <ImageContainer>
              <Frame
                src={location.pathname === '/login' ? frameLogtab : frameRegtab}
                alt="customer goods"
              />
              <Text>Finance App</Text>
            </ImageContainer>
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
      {isWideСomputer ? (
        <Container>
          <Wrapper>
            <ImageContainer>
              <Frame
                src={location.pathname === '/login' ? frameLogbig : frameRegbig}
                alt="customer goods"
              />
              <Text>Finance App</Text>
            </ImageContainer>

            <FormContainer>
              <LoginForm />
              {/* {location.pathname === '/login' ? (
                <LoginForm />
              ) : (
                <RegistrationForm />
              )} */}
            </FormContainer>
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
};

export default LoginPage;
