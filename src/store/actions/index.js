import api from '../../services/api';
import {showMessage} from 'react-native-flash-message';

import {
  addTransactions,
  addTransaction,
  sumTransaction,
} from '../ducks/transactions';

export const allTransactions = () => {
  return dispatch => {
    api
      .get('/transactions')
      .then(res => {
        dispatch(addTransactions(res.data));
        console.log(res.data);
      })
      .catch(console.log);
  };
};

export const fetchAddTransaction = transaction => {
  return dispatch => {
    console.log(transaction);
    api
      .post('/transactions', transaction)
      .then(res => {
        dispatch(addTransaction(res.data));
        showMessage({
          message: `A trasação ${
            transaction.transaction_name
          } foi adicionada com sucesso`,
          type: 'success',
        });
      })
      .catch(console.log);
  };
};

export const sumAllTransactions = () => {
  return dispatch => {
    api
      .get('/v1/read/transactions/transactionsSum.php')
      .then(res => {
        dispatch(sumTransaction(res.data));
        console.log(res.data);
      })
      .catch(console.log);
  };
};

/*
essas sao as urls para acesso ao servidor
/v1/read/transactions = lista as transações
/v1/create/transactions/createtransaction.php = cria uma transação
 */
