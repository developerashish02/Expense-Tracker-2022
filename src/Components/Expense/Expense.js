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
			<ExpensesFilter selected={expenseYear} onExpenseYear={getExpenseYear} />
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
