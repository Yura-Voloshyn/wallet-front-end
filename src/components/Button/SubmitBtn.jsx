import { Button } from './SubmitBtn.styled';

const SubmitBtn = ({ btnText, onClick }) => {
  return <Button onClick={onClick}>{btnText}</Button>;
};

export default SubmitBtn;
