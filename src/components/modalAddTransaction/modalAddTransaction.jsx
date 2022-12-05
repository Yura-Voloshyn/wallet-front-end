import React, { useState } from "react";
// import { expenseTransactions, incomeTransactions } from "./transactionTypes";
// import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { TfiClose } from 'react-icons/tfi'
import { OpenBtn } from "../Button/OpenModalBtn.styled"
import { TitleMod, Checkbox, Modal, CloseMod} from "./modalAddTransaction.styled"
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';


Modal.setAppElement('#root');

const defaultState = {
  date: new Date(),
  type: false,
  amount: "",
  category: "",
  comment: "",
};

const ModalAddTransaction = () => {
    
    // const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [transaction] = useState(defaultState);

      function openModal() {
    setIsOpen(true);
    }
    
      function closeModal() {
    setIsOpen(false);
    }
    




    return createPortal(
      <div>
        <OpenBtn onClick={openModal} aria-label="add"></OpenBtn>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            ></Modal>
            <CloseMod type="button" onClick={closeModal}><TfiClose/></CloseMod>
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
            <SubmitBtn onClick={closeModal} btnText={'Decline'}></SubmitBtn>   
      </div>
)
}


export default ModalAddTransaction;


