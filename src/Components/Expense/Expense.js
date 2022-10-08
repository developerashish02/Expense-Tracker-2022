import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
const Expense = (props) => {
	const [expenseYear, SetExpenseYear] = useState("2020");
	// Get Expense Years
	const getExpenseYear = (expenseYear) => {
		SetExpenseYear(expenseYear);
		console.log(expenseYear);
	};
	return (
		<div className="expenses">
			{/* filter Year  */}
			<ExpensesFilter selected={expenseYear} onExpenseYear={getExpenseYear} />
			{/* Render Expense List Dynamically */}
			{props.expense.map((expense) => (
				<ExpenseItem
					title={expense.title}
					date={expense.date}
					price={expense.price}
				/>
			))}
		</div>
	);
};

export default Expense;
