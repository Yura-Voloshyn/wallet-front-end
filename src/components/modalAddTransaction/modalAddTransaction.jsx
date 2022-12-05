// import React, { useState } from "react";
// import { expenseTransactions, incomeTransactions } from "./transactionTypes";
// import { useDispatch } from "react-redux";
// import { createPortal } from "react-dom";


// const ModalAddTransaction = () => {

//     const dispatch = useDispatch();

//     const [transaction, setTransaction] = useState(defaultState);
//     const [modalIsOpen, setIsOpen] = React.useState(false);

//     return createPortal(
//     <div class="overlay container add-modal">
//       <div class="modal-top">
//         <button className="btn-open" onClick="{openModal}">Add</button>
//         <h2 className="Modal-title">Add transaction</h2>
//         <div className="checkBox">
//               <p>
//             Income
//               </p>
//           <label className="switch">
//             <input
//               className="switch"
//               type="checkbox"
//               name="type"
//               onChange="{handleInputChange}"
//               checked="{transaction.type}"
//             />
//             <div className="back">
//               <div className="indicator">
//             </div>
//           </label>
//           <p>
//             Expense
//           </p>
//         </div>
//                 {/* category choosing form  */}
//                 <form id="transaction-form" onSubmit={handleSubmit}>
//           <div className="input-select-container">
//             <Select
//               key={transaction.type}
//               styles={selectStyles(transaction.type)}
//               options={transaction.type ? expenseTransaction : incomeTransaction}
//               placeholder="Choose category"
//               onChange>
//             <input
//               tabIndex={}
//               className="requiredHackInput"
//               type="text"
//               required
//               onChange>
//           </div>

//           <div className="money-date-container">
//             <label>
//               <input
//                 className="moneyInput"
//                 type="text"
//                 placeholder="0.00"
//                 name="amount"
//                 value={transaction.amount}
//                 onChange>
//             </label>


//           <label className="lable">
//             <input
//               type="text"
//               placeholder="Leave your comment here"
//               className="descriptionInput"
//               name="comment"
//               value={transaction.comment}
//               onChange={handleInputChange}
//             />
//           </label>
//         </form>
//         <button type="submit" form="transaction-form" className="btn btn-add">
//           <p className="btn-text">Add</p>
//         </button>
//         <button className="btn btn-exit" onClick={closeModal}>
//           <p className="btn-text">Cancel</p>
//         </button>
//         </div>
//       </div>
// )

// }


// export default ModalAddTransaction;


