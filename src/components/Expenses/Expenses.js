import "./Expenses.css" 
import React from "react"; 
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map(expense => (
                <ExpenseItem
                    key={expense.id} 
                    title={expense.title} 
                    date={expense.date}
                    amount={expense.amount} />
            ))}
        </Card>
    );
}

export default Expenses;