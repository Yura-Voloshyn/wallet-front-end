import { useMedia } from 'react-use';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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
              <motion.div
                initial={{ scale: 1.25, opacity: 0.75 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.75 }}
              >
                <LoginImage image={frameLogtab} />
              </motion.div>
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
              <motion.div
                initial={{ scale: 1.25, opacity: 0.75 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.75 }}
              >
                <RegisterImage image={frameRegtab} />
              </motion.div>
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
              <motion.div
                initial={{ scale: 1.25, opacity: 0.75 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.75 }}
              >
                <LoginImage image={frameLogbig} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 1.25, opacity: 0.75 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.75 }}
              >
                <RegisterImage image={frameRegbig} />
              </motion.div>
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
