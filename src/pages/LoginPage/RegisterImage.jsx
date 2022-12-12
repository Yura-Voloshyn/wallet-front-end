import {
  ImageContainerRegister,
  Text,
  FrameRegister,
} from './LoginPage.styled';

const RegisterImage = ({ image }) => {
  return (
    <ImageContainerRegister>
      <FrameRegister src={image} alt="customer goods" />
      <Text>Finance App</Text>
    </ImageContainerRegister>
  );
};

export default RegisterImage;
