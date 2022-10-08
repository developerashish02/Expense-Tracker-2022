import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
	// React Hooks return array we get the value using array destracturing
	const [title, setTitle] = useState(props.title);

	return (
		<div className="expense-item">
			<div className="expense-item__description ">
				<ExpenseDate date={props.date} />
				<h2>{props.title}</h2>
			</div>
			<div className="expense-item__price">Rs {props.price}</div>
		</div>
	);
};

export default ExpenseItem;
