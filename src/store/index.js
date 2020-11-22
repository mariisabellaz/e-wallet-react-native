import {configureStore} from '@reduxjs/toolkit';

import rootTransactions from './ducks/transactions';

export default configureStore({
  reducer: {
    transactions: rootTransactions,
  },
});
