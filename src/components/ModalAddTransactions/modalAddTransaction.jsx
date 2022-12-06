// import React, { useState } from "react";
import PropTypes from 'prop-types';
// import { useEffect } from 'react';
// import { expenseTransactions, incomeTransactions } from "./transactionTypes";
// import { useDispatch } from "react-redux";
// import { setTransactionModaClose } from '../../../redux/transactions/transaction-operations';
// import { createPortal } from "react-dom";
// import { TfiClose } from 'react-icons/tfi'
// import { OpenBtn } from "../Button/ButtonAddTransaction/OpenModalBtn.styled"
import {  TitleMod} from "./modalAddTransaction.styled"
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';
import 'react-datetime/css/react-datetime.css';
import Modal from '../ModalAddTransactions/Modal';
// import Datetime from 'react-datetime';





const ModalAddTransactions = ({ onClose }) => {
    
    // const dispatch = useDispatch();

  

    




    return (
      <Modal onClose={onClose}>
              <button
        type="button"
        className="TransactionAddForm__closeBtn"
        onClick={onClose}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L17 17" stroke="black" />
          <path d="M1 17L17 0.999999" stroke="black" />
        </svg>
      </button>
            {/* <CloseMod type="button" onClick={onClose}><TfiClose/></CloseMod> */}
            <TitleMod as="h2">Add transaction</TitleMod>
            {/* Transactions checkbox */}

            {/* <Checkbox as="div">
          
            <label className="switch">
                <input
                type="checkbox"
                name="type"
                checked={transaction.type}
                />
           </label>
            </Checkbox> */}
            {/* Calendar for date selection */}

            {/* Input for comment */}
            
          <label className="lable">
            <input
              type="text"
              placeholder="Комментарий"
              className="descriptionInput"
              name="comment"
              // value={transaction.comment}
            />
          </label>


            {/* Two modal btns */}
            <StyledNavLink btnText={'Add'}></StyledNavLink>
            <SubmitBtn onClick={onClose} btnText={'Decline'}></SubmitBtn>   
      </Modal>)
}

ModalAddTransactions.propTypes = {
  // children: PropTypes.node,
  onClose: PropTypes.func,
};

export default ModalAddTransactions;


