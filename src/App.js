import ExpenseItem from "./Components/ExpenseItem";

const App = () => {
	// expense data
	const expenseData = [
		{ title: "Car Inseranse", date: new Date(12, 5, 20), price: 2000 },
		{ title: "Bike Inseranse", date: new Date(12, 5, 20), price: 4000 },
		{ title: "Health Inseranse", date: new Date(12, 5, 20), price: 6000 },
	];
	return (
		<div>
			<ExpenseItem
				title={expenseData[0].title}
				date={expenseData[0].date}
				price={expenseData[0].price}
			/>
			<ExpenseItem
				title={expenseData[1].title}
				date={expenseData[1].date}
				price={expenseData[1].price}
			/>
			<ExpenseItem
				title={expenseData[2].title}
				date={expenseData[2].date}
				price={expenseData[2].price}
			/>
		</div>
	);
};

export default App;
