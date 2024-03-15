import { useExpenseContext } from "../utils/expenseContext";
import './ExpenseItem.css';

const ExpenseItem = ({expense}) => {
  const {dispatch } = useExpenseContext();
  
  const handleDelete = () => {
    dispatch({ type: 'removeExpense', payload: { id: expense.id } });
  };

  return (
    <div className="expense__item">
      <p>Montant: {expense.amount}€</p>
      <p>Catégorie: {expense.category}</p>
      <button onClick={handleDelete} className="button__Item">X</button>
    </div>
  );
};

export default ExpenseItem;