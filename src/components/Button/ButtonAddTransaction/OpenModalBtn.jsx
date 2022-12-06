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

// import { useDispatch } from 'react-redux';
// import {  OpenBtn, SpanAdd } from './OpenModalBtn.styled';
// import { GrAdd } from 'react-icons/gr';

// export default function ButtonAddTransactions() {
//   const dispatch = useDispatch();

    
//   const openModal = () => {
//     dispatch(setTransactionModalOpen());
//   };

//   return (
//     <div>
//           <OpenBtn type="button" onClick={openModal}>
//         <SpanAdd>
//           <GrAdd />
//         </SpanAdd>
//              {/* <PlusSvg>
//                 <use href={`${SpriteSvg}#icon-plus`}></use>
//             </PlusSvg> */}
//          </OpenBtn>
//     </div>
//   );
// }

import React from 'react';
import {  OpenBtn, IconAdd } from './OpenModalBtn.styled';

export default function ButtonAddTransaction({onOpen}) {

  return (
    <OpenBtn type="button" onClick={onOpen}>
      <IconAdd as="svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0V20" stroke="white" strokeWidth="2" />
        <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
      </IconAdd>
    </OpenBtn>
    );
};

