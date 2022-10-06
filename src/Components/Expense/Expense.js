import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
const Expense = (props) => {
	return (
		<div className="expenses">
			<ExpenseItem
				title={props.expense[0].title}
				date={props.expense[0].date}
				price={props.expense[0].price}
			/>
			<ExpenseItem
				title={props.expense[1].title}
				date={props.expense[1].date}
				price={props.expense[1].price}
			/>
			<ExpenseItem
				title={props.expense[2].title}
				date={props.expense[2].date}
				price={props.expense[2].price}
			/>
		</div>
	);
};

export default Expense;
