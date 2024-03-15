import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/TotalExpenses';
import TotalExpensesCategory from './components/TotalExpensesCategory'

function App() {
  return (
    <>
    <header>
    <h1>Dépense Malin</h1>
    <h2>Gestionnaire de dépenses personnelles</h2>
    <h4>Une meilleure visibilité sur tes dépenses pour que tu ne finisses plus à découvert</h4>
    </header>
      <ExpenseForm />
      <TotalExpenses />
      <TotalExpensesCategory />
      <ExpenseList />
    </>
  )
}

export default App
