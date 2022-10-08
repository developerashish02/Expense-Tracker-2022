import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [price, setPrice] = useState("");

	// Chnage title Handler
	const titleChnageHandler = (e) => {
		setTitle(e.target.value);
	};

	const amountChnageHandler = (e) => {
		setPrice(e.target.value);
	};

	const dateChnageHandler = (e) => {
		setDate(e.target.value);
	};

	// submit date
	const submitHandler = (e) => {
		e.preventDefault();

		const expense = {
			title,
			date: new Date(date),
			price,
		};

		props.onSaveExpenseData(expense);

		// Clear inputs
		setTitle("");
		setDate("");
		setPrice("");
	};
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChnageHandler} value={title} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" onChange={amountChnageHandler} value={price} />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChnageHandler}
						value={date}
					/>
				</div>
			</div>
			<div className="new-expense__actions ">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
