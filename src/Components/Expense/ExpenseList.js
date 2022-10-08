import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
	if (props.item.length === 0) {
		return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
	}
	return (
		<ul className="expenses-list">
			{/* { Render Expenses } */}
			{props.item.map((expense, index) => {
				return (
					<ExpenseItem
						title={expense.title}
						date={expense.date}
						price={expense.price}
						key={index}
					/>
				);
			})}
		</ul>
	);
};

export default ExpenseList;
