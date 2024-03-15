import ExpenseItem from './ExpenseItem'; 
import { useExpenseContext } from '../utils/expenseContext';

const ExpenseList = () => {
  const {state} = useExpenseContext();
  const expenses = state.expenses;
  return (
    <div>
      {expenses.length > 0 ? (expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))
      ) : ( <p>Aucune dépense pour le moment.</p>
      )
    }
    </div>
  );
};

export default ExpenseList;
