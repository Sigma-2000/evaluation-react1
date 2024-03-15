import { useExpenseContext } from "../utils/expenseContext";

const TotalExpenses = () => {

  const { totalExpenses} = useExpenseContext();
  return (
    <div>
      <h3>Total des dépenses: {totalExpenses}€</h3>
    </div>
  );
};

export default TotalExpenses;
