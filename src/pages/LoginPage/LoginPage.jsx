import { useMedia } from 'react-use';
// import { useLocation } from 'react-router-dom';
import frameLogbig from '../../images/frameLogbig.png';
import frameLogtab from '../../images/frameLogtab.png';
import LoginForm from 'components/LoginForm';
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
  // const location = useLocation();
  return (
    <>
      {isWideMobie ? (
        <Container>
          <Wrapper>
            <LoginForm />
          </Wrapper>
        </Container>
      ) : null}
      {isWideTablet ? (
        <Container>
          <Wrapper>
            <ImageContainer>
              <Frame src={frameLogtab} alt="customer orders goods" />
              <Text>Finance App</Text>
            </ImageContainer>
            <FormContainer>
              <LoginForm />
            </FormContainer>
          </Wrapper>
        </Container>
      ) : null}
      {isWideСomputer ? (
        <Container>
          <Wrapper>
            <ImageContainer>
              <Frame src={frameLogbig} alt="customer orders goods" />
              <Text>Finance App</Text>
            </ImageContainer>

            <FormContainer>
              <LoginForm />
            </FormContainer>
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
};

export default LoginPage;
