import {createContext, useContext, useReducer, useEffect, useState} from 'react';
import expenseReducer, {initialState} from '../reducer/expenseReducer';

const expenseContext = createContext();

export const useExpenseContext = () => {
    return useContext(expenseContext);
}

const ExpenseContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(expenseReducer, initialState);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalByCategory, setTotalByCategory] = useState({});

  useEffect(() => {
    setTotalExpenses(state.expenses.reduce((total, expense) => total + Number(expense.amount), 0));

    const totals = state.expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + Number(expense.amount);
      return acc;
    }, {});
    setTotalByCategory(totals);
  }, [state.expenses]);

    return <expenseContext.Provider value={{ state, dispatch, totalExpenses, totalByCategory }}>
        {children}
    </expenseContext.Provider>
}

export default ExpenseContextProvider