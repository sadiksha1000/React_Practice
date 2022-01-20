import React, { useState, useRef} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";


const AddUser = (props) => {
  const nameInputRef=useRef();
  const ageInputRef=useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError]=useState();

  const addUser = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
     setError({
         title:'Invalid Input',
         message:'Please enter a valid name and age(non-empty values'
     })
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title:'Invalid Age',
            message:'Please enter a valid age'
        })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler=()=>{
      setError(null);
  }

  return (
    <Wrapper>
      { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
          <form onSubmit={addUser}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={enteredUsername}
              id="username"
              onChange={userNameChangeHandler}
              ref={nameInputRef}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              value={enteredAge}
              id="age"
              onChange={ageChangeHandler}
              ref={ageInputRef}
            />
            {/* <button type="submit">Add User</button> */}
            <Button type="submit">Add User</Button>
          </form>
        </Card>
    </Wrapper>
  );
};

export default AddUser;
