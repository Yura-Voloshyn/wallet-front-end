import { ImageContainer, Text, Frame } from './LoginPage.styled';

const LoginImage = ({ image }) => {
  return (
    <ImageContainer>
      <Frame src={image} alt="customer goods" />
      <Text>Finance App</Text>
    </ImageContainer>
  );
};

export default LoginImage;
