import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
	const newExpense = (expense) => {
		const item = {
			...expense,
			id: Math.random().toString(),
		};
		props.onNewExpense(item);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={newExpense} />
		</div>
	);
};

export default NewExpense;
