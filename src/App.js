import { useState } from "react";
import NewExpenseComponent from "./Components/Expense/Expense";
import NewExpense from "./Components/newexpense/NewExpense";

const App = () => {
	// Dummy data
	const dummyData = [
		{ title: "Car Inseranse", date: new Date(2020, 5, 20), price: 2000 },
		{ title: "Bike Inseranse", date: new Date(2020, 5, 20), price: 4000 },
		{ title: "Health Inseranse", date: new Date(2020, 5, 20), price: 6000 },
	];
	// expense data
	const [expenseData, setExpenseData] = useState(dummyData);

	// chield to parent state Lifting
	const expense = (newExpense) => {
		setExpenseData((prevExpense) => {
			return [newExpense, ...prevExpense];
		});
	};

	return (
		<div>
			<NewExpense onNewExpense={expense} />
			<NewExpenseComponent expense={expenseData} />
		</div>
	);
};

export default App;
