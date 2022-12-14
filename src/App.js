import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title:'Car Insurance', amount: 294.89, date: new Date(2022,11,8)},
    { title:'Car Model', amount: 244.89, date: new Date(2022,7,18)},
    { title:'Car Type', amount: 494.89, date: new Date(2002,11,9)},
    { title:'Car Color', amount: 194.89, date: new Date(2021,10,8)},
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title={expenses[0].title} 
      amount={expenses[0].amount} 
      date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[1].title} 
      amount={expenses[1].amount} 
      date={expenses[1].date}
      ></ExpenseItem><ExpenseItem 
      title={expenses[2].title} 
      amount={expenses[2].amount} 
      date={expenses[2].date}
      ></ExpenseItem><ExpenseItem 
      title={expenses[3].title} 
      amount={expenses[3].amount} 
      date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
