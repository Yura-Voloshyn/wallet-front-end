import { RotatingLines } from 'react-loader-spinner';
import { SpinnerBox } from './Spinner.styled';

const Spinner = () => {
  return (
    <SpinnerBox>
      <RotatingLines
        width="150"
        strokeColor="#C5BAFF"
        strokeWidth="5"
        animationDuration="0.75"
        visible={true}
      />
    </SpinnerBox>
  );
};

export default Spinner;
