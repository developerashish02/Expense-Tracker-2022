import NewExpenseComponent from "./Components/Expense";

const App = () => {
	// expense data
	const expenseData = [
		{ title: "Car Inseranse", date: new Date(12, 5, 20), price: 2000 },
		{ title: "Bike Inseranse", date: new Date(12, 5, 20), price: 4000 },
		{ title: "Health Inseranse", date: new Date(12, 5, 20), price: 6000 },
	];
	return (
		<div>
			<NewExpenseComponent expense={expenseData} />
		</div>
	);
};

export default App;
