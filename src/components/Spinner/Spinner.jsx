import { RotatingLines } from 'react-loader-spinner';
import { SpinnerWrap } from './Spinner.styled';

const Spinner = () => {
  return (
    <SpinnerWrap>
      <RotatingLines
        width="150"
        strokeColor="#C5BAFF"
        strokeWidth="5"
        animationDuration="0.75"
        visible={true}
      />
    </SpinnerWrap>
  );
};

export default Spinner;
