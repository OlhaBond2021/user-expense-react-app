import React, { useState } from "react";

import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [isValid, setIsValid] = useState(true);

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredTitle(event.target.value);

    //..................................this solution is bad!!!!
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    //........................................

    // setUserInput( (prevState) => {
    //   return {...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredAmount(event.target.value);

    //.....................................this solution is bad!!!!
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
    //...................................................
  };

  const dateChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredDate(event.target.value);

    //..................................this solution is bad!!!!
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
    //............................................
  };

  const submitHandler = (event) => {
    event.preventDefault(); // метод JS який відміняє відправку форми за замовчуванням
    if (enteredTitle.trim().length === 0) {
      setIsValid(false);
      return;
    }

    if (enteredDate.trim().length === 0) {
      setIsValid(false);
      return;
    }

    if (enteredAmount.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense__controls"]}>
        <div className={`${styles["new-expense__control"]} ${!isValid && styles.invalid}`}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={`${styles["new-expense__control"]} ${!isValid && styles.invalid}`}>
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className={`${styles["new-expense__control"]} ${!isValid && styles.invalid}`}>
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2024-12-31"
          />
        </div>
      </div>
      <div className={styles["new-expense__actions"]}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
