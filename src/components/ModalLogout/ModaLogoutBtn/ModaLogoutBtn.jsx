import { Button } from './ModaLogoutBtn.styled';

export const ModaLogoutBtn = ({ onClick, text, bgColor, textColor }) => {
  return (
    <Button onClick={onClick} bgColor={bgColor} textColor={textColor}>
      {text}
    </Button>
  );
};
