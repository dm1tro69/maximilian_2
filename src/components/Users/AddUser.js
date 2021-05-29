import React, {useState} from 'react';
import Card from '../Ui/Card';
import styled from './AddUser.module.css';
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";
const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()
    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({title: "Invalid input", message: 'Please enter a username'})
            return
        }
        if (+enteredAge < 1){
            setError({title: "Invalid ge", message: 'Please enter a age'})
            return;

        }
        console.log(enteredAge, enteredUsername)
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredAge('')
        setEnteredUsername('')
    };
    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);


    }
    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);

    }
    const errorHandler = () => {
        setError(null)
    }
    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>}
        <Card className={styled.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input
                    onChange={usernameChangeHandler}
                    id='username'
                    type='text'
                    value={enteredUsername}/>
                <label htmlFor='age'>Age (Years)</label>
                <input
                    value={enteredAge}
                    onChange={ageChangeHandler}
                    id='age'
                    type='number' />
                <Button type='submit' >Add User</Button>
            </form>
        </Card>
        </>
    );
};
export default AddUser;
