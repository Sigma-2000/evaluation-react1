import { useState } from 'react';
import SelectCategory from './SelectCategory'; 
import { useExpenseContext } from '../utils/expenseContext';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const { state, dispatch } = useExpenseContext();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Alimentation');

  const handleSubmit = (e) => {
    e.preventDefault();
   if (amount.trim() === '' || isNaN(amount)) {
    dispatch({ 
      type: 'setError', 
      payload: "Veuillez entrer un montant valide."
    });
  } else {
    dispatch({
      type: 'addExpense',
      payload: {
        amount: amount,
        category: category,
      },
    });

    setAmount('');
    setCategory('Alimentation');
  }
};

  return (
    <>
    <form onSubmit={handleSubmit} className='form__group'>
      <div>
        <label>Montant:</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Catégorie:</label>
        <SelectCategory value={category} onChange={(e) => setCategory(e.target.value)}/>
      </div>
      <button type="submit">Ajouter la dépense</button>
    </form>
    {state.errorMessage && <div style={{color: 'red'}}>{state.errorMessage}</div>}
    </>
  );
};

export default ExpenseForm;