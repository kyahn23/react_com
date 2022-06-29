import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  /* && 앞의 조건이 true 일 경우 && 뒤의 조건을 렌더링 */
  // props.items.length === 0 && <h2 className="expenses-list__fallback">Found no expenses.</h2>

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">소비 내역이 없습니다.</h2>;
    // <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} // 목록을 mapping 할 때는 반드시 key를 추가
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
