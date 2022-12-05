import { OpenBtn } from './OpenModalBtn.styled';
import { PlusSvg } from './OpenModalBtn.styled';
import SpriteSvg from "../../images/icons/sprite.svg"

const OpenModalBtn = ({ onClick }) => {
    return (
        <OpenBtn type="button" onClick={onClick}>
            <PlusSvg>
                <use href={`${SpriteSvg}#icon-plus`}></use>
            </PlusSvg>
        </OpenBtn>
    );
};

export default OpenModalBtn;

