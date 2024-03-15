export const initialState = {
  expenses: [],
  errorMessage: '',
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'addExpense': {
      const newExpense = {
        id: Date.now(), 
        amount: action.payload.amount,
        category: action.payload.category,
      };
    
      return {
        ...state,
        expenses: [...state.expenses, newExpense],
        errorMessage: '', 
      };
    }
    case 'setError':
      return {
        ...state,
        errorMessage: action.payload,
      };
    case 'removeExpense':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload.id), 
      };
    default:
      return state;
  }
};

export default expenseReducer; 