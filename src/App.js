import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "휴지",
    amount: 50000,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "TV", amount: 1190000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "자동차 보험",
    amount: 400000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "책상",
    amount: 619000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>가계부</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
