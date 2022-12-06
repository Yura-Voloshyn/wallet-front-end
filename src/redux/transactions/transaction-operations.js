import { createAction } from '@reduxjs/toolkit';




export const setTransactionModalOpen = () => {
  createAction('openTransactionModal');;
};
export const setTransactionModalClose = () => {
  createAction('closeTransactionModal');
};