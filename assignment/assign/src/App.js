import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import React,{useState} from 'react';

function App() {
  const [usersList,setUsersList]=useState([]);

  const addUserHandler=(userName,age)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name:userName,age:age, id:Math.random().toString()}];
    });
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
