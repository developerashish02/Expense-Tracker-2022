import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
	// React Hooks return array we get the value using array destracturing
	const [title, setTitle] = useState(props.title);
	const clickHandler = () => {
		setTitle("Ashish Gaikwad");
	};
	return (
		<div className="expense-item">
			<div className="expense-item__description ">
				<ExpenseDate date={props.date} />
				<h2>{title}</h2>
			</div>
			<div className="expense-item__price">Rs {props.price}</div>
			<button onClick={clickHandler}>Chnage Title </button>
		</div>
	);
};

export default ExpenseItem;
