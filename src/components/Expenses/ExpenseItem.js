import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // state는 컴포넌트의 인스턴스별로 나뉘어져있음
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(title + " Updated!"); //state 를 변경하면 다시 렌더링됨
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
