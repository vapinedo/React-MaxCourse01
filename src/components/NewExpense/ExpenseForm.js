import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [ enteredDate, setEnteredDate] = useState("");

    // cont [userInput, setUserInput] = useState({ 
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // });

    const titleChangeHandler = (event) => { 
        setEnteredTitle(event.target.value); 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        //  });
    };

    const amountChangeHandler = (event) => { 
        setEnteredAmount(event.target.value); 
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    };
    
    const dateChangeHanlder = (event) => { 
        setEnteredDate(event.target.value); 
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleChangeHandler} type="text" />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateChangeHanlder} type="date" min="2019-01-01" max="2022-12-31" />
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>  
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;