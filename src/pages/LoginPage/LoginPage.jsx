// import LoginForm from 'components/LoginForm';
// import RegistrationForm from 'components/RegistrationForm';
import {
  Section,
  Container,
  //   Frame,
  ImageContainer,
  FormContainer,
  Wrapper,
  Blur,
  Text,
} from './LoginPage.styled';
// import frame from '../../images/frame.png';
// import frameBig from '../../images/frameBig.png';
// import frameReg from '../../images/frameReg.png';
// import frameRegBig from '../../images/frameRegBig.png';

import { useMedia } from 'react-use';
// import { useLocation } from 'react-router-dom';
// import SharedLayout from 'components/SharedLayout';

const LoginPage = () => {
  const isWideMobie = useMedia('(max-width: 767px)');
  const isWideTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  const isWideСomputer = useMedia('(min-width: 1280px)');
  //   const location = useLocation();

  return (
    // <SharedLayout>
    <Section>
      {isWideMobie ? (
        <Container>
          <Wrapper>
            {/* {location.pathname === '/login' ? (
                <LoginForm />
                      )
            //               : (
            //     // <RegistrationForm />
            //   )
              } */}
          </Wrapper>
        </Container>
      ) : null}
      {isWideTablet ? (
        <Container>
          <Wrapper>
            <ImageContainer>
              {/* <Frame
                  src={location.pathname === '/login' ? frame : frameReg}
                  alt="customer orders goods"
                /> */}
              <Text>Finance App</Text>
            </ImageContainer>
            <FormContainer>
              {/* {location.pathname === '/login' ? (
                <LoginForm />
              ) : (
                <RegistrationForm />
              )} */}
            </FormContainer>
          </Wrapper>
        </Container>
      ) : null}
      {isWideСomputer ? (
        <Blur>
          <Container>
            <Wrapper>
              <ImageContainer>
                {/* <Frame
                    src={
                      location.pathname === '/login' ? frameBig : frameRegBig
                    }
                    alt="customer orders goods"
                  /> */}
                <Text>Finance App</Text>
              </ImageContainer>

              <FormContainer>
                {/* {location.pathname === '/login' ? (
                  <LoginForm />
                ) : (
                  <RegistrationForm />
                )} */}
              </FormContainer>
            </Wrapper>
          </Container>
        </Blur>
      ) : null}
    </Section>
    // </SharedLayout>
  );
};

export default LoginPage;
