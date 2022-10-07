import NewExpenseComponent from "./Components/Expense/Expense";
import NewExpense from "./Components/newexpense/NewExpense";

const App = () => {
	// expense data
	const expenseData = [
		{ title: "Car Inseranse", date: new Date(12, 5, 20), price: 2000 },
		{ title: "Bike Inseranse", date: new Date(12, 5, 20), price: 4000 },
		{ title: "Health Inseranse", date: new Date(12, 5, 20), price: 6000 },
	];

	const expense = (newExpense) => {
		expenseData.push(newExpense);
		console.log(expenseData);
	};

	return (
		<div>
			<NewExpense onNewExpense={expense} />
			<NewExpenseComponent expense={expenseData} />
		</div>
	);
};

export default App;
