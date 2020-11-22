import {createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addTransaction = createAction('ADD_TRANSACTION');
export const addTransactions = createAction('ADD_TRANSACTIONS');
export const sumTransaction = createAction('SUM_TRANSACTION');

export default createReducer(INITIAL_STATE, {
  [addTransaction.type]: (state, action) => [...state, action.payload],
  [addTransactions.type]: (state, action) => [...action.payload],
  [sumTransaction.type]: (state, action) => [...action.payload],
});
