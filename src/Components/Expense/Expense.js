import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
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
			<ExpensesFilter selected={expenseYear} onExpenseYear={getExpenseYear} />
			<ExpenseList item={filterExpense} />
		</div>
	);
};

export default Expense;
