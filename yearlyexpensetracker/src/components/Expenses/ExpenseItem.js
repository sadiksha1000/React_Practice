// import React from "react";
// import {useState} from 'react';
// import "./ExpenseItem.css";
// import Card from "../UI/Card";

// function ExpenseItem(props) {
//   // React Hooks= can be called only inside the function
//   const [title,setTitle]=useState(props.title);

//   function changeTitle() {
//     setTitle('Updated!');
//     console.log(title);
//   }
//   return (
//     <div className="wrap">
//       <Card className="expense-item">
//         <div className="expense-date">
//           <h3 className="expense-date__month">{props.month}</h3>
//           <h3 className="expense-date__year font-bold">{props.year}</h3>
//           <h3 className="expense-date__day">{props.date}</h3>
//         </div>
//         <h3 className="expense-item__description font-bold">{"  " + title}</h3>
//         <h4 className="expense-item__price">{"$ " + props.price}</h4>
//         <button onClick={changeTitle} className="text-white px-px m-0.5">Change Title</button>
//       </Card>
//     </div>
//   );
// }

// export default ExpenseItem;

import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{"$ "+props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
