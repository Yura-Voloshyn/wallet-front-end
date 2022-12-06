// import { OpenBtn } from './OpenModalBtn.styled';
// import { PlusSvg } from './OpenModalBtn.styled';
// import SpriteSvg from "../../images/icons/sprite.svg"

// const OpenModalBtn = ({ onClick }) => {
//     return (
//         <OpenBtn type="button" onClick={onClick}>
//             <PlusSvg>
//                 <use href={`${SpriteSvg}#icon-plus`}></use>
//             </PlusSvg>
//         </OpenBtn>
//     );
// };

// export default OpenModalBtn;
import { useDispatch } from 'react-redux';
import { setTransactionModalOpen } from '../../../redux/transactions/transaction-operations';
import {  OpenBtn, SpanAdd } from './OpenModalBtn.styled';
// import SpriteSvg from "../../images/icons/sprite.svg"
import { GrAdd } from 'react-icons/gr';


export default function ButtonAddTransactions() {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setTransactionModalOpen());
  };

  return (
    <div>
          <OpenBtn type="button" onClick={openModal}>
        <SpanAdd>
          <GrAdd />
        </SpanAdd>
             {/* <PlusSvg>
                <use href={`${SpriteSvg}#icon-plus`}></use>
            </PlusSvg> */}
         </OpenBtn>
    </div>
  );
}



