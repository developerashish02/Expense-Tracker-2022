import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
const Expense = (props) => {
	const [expenseYear, SetExpenseYear] = useState("2020");
	// Get Expense Years
	const getExpenseYear = (expenseYear) => {
		SetExpenseYear(expenseYear);
	};

	// Filter Expensese Accounrding to year
	const filterExpense = props.expense.filter(
		(expense) => expense.date.getFullYear() === Number(expenseYear)
	);

	return (
		<div className="expenses">
			{/* filter Year  */}
			<ExpensesFilter selected={expenseYear} onExpenseYear={getExpenseYear} />
			{/* Render Expense List Dynamically */}
			{filterExpense.map((expense, index) => {
				return (
					<ExpenseItem
						title={expense.title}
						date={expense.date}
						price={expense.price}
						key={index}
					/>
				);
			})}
		</div>
	);
};

export default Expense;
