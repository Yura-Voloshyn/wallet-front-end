import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import { expenseTransactions, incomeTransactions } from "./transactionTypes";
// import { useDispatch } from "react-redux";
// import { setTransactionModaClose } from '../../../redux/transactions/transaction-operations';
import { createPortal } from "react-dom";
import { TfiClose } from 'react-icons/tfi'
import { OpenBtn } from "../Button/ButtonAddTransaction/OpenModalBtn.styled"
import { Backdrop, TitleMod, Checkbox, Modal, CloseMod} from "./modalAddTransaction.styled"
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';
import 'react-datetime/css/react-datetime.css';
// import Datetime from 'react-datetime';


const modalRoot = document.querySelector('#modal-root');





// --------On (-) by default-----------
const defaultState = {
  date: new Date(),
  type: false,
  category: "",
  comment: "",
  sum: "",
};

const ModalAddTransactions = ({ children, onClose }) => {
    
    // const dispatch = useDispatch();

    const [modalIsOpen] = React.useState(false);
    const [transaction] = useState(defaultState);

  const handleEscape = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  });

  const closeOnBackdrop = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
    




    return createPortal(
      <Backdrop as="div" onClick={closeOnBackdrop}>
        <OpenBtn onClick={onClose} aria-label="add"></OpenBtn>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={onClose}
            ></Modal>
            <CloseMod type="button" onClick={onClose}><TfiClose/></CloseMod>
            <TitleMod as="h2">Add transaction</TitleMod>
            {/* Transactions checkbox */}

            <Checkbox as="div">
          
            <label className="switch">
                <input
                type="checkbox"
                name="type"
                checked={transaction.type}
                />
           </label>
            </Checkbox>
            {/* Calendar for date selection */}

            {/* Input for comment */}
            
          <label className="lable">
            <input
              type="text"
              placeholder="Комментарий"
              className="descriptionInput"
              name="comment"
              value={transaction.comment}
            />
          </label>


            {/* Two modal btns */}
            <StyledNavLink btnText={'Add'}></StyledNavLink>
            <SubmitBtn onClick={onClose} btnText={'Decline'}></SubmitBtn>   
      </Backdrop>, modalRoot)
}

ModalAddTransactions.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default ModalAddTransactions;


