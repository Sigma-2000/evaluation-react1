import { useExpenseContext } from '../utils/expenseContext';
import './TotalExpensesCategory.css';

const TotalExpensesCategory = () => {
  const { totalByCategory } = useExpenseContext();

  const hasEntries = Object.keys(totalByCategory).length > 0;

  return (
    <div >
        <h3>Total par Catégorie:</h3>
        {hasEntries ? (
            <ul className='category__total'>
                {Object.entries(totalByCategory).map(([category, total]) => (
                    <li key={category}>{category}: {total.toFixed(2)}€</li>
                ))}
            </ul>
        ) : (
            <p></p>
        )}
    </div>
  );
};

export default TotalExpensesCategory;