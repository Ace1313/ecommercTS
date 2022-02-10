import { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../components/context/AppContext';
import { mockInfo } from '../userInformation';
import { useNavigate } from 'react-router-dom';

function Loggin() {
   const { dispatch } = useContext(AppContext);
   let navigate = useNavigate();

   const [enteredPassword, setEnteredPassword] = useState('');
   const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

   const [enteredEmail, setEnteredEmail] = useState('');
   const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

   const enteredPasswordIsValid = enteredPassword.trim() !== '';
   const nameInputIsInvalid = !enteredPasswordIsValid && enteredPasswordTouched;

   const enteredEmailIsValid = enteredEmail.includes('@');
   const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

   const nameInputChangeHandler = (event: any) => {
      setEnteredPassword(event.target.value);
   };

   const emailInputChangeHandler = (event: any) => {
      setEnteredEmail(event.target.value);
   };

   const nameInputBlurHandler = () => {
      setEnteredPasswordTouched(true);
   };

   const emailInputBlurHandler = () => {
      setEnteredEmailTouched(true);
   };

   const formSubmissionHandler = (event: any) => {
      event.preventDefault();

      setEnteredPasswordTouched(true);

      if (
         enteredEmail === mockInfo[0].email &&
         enteredPassword === mockInfo[0].password
      ) {
         dispatch({ type: 'SET_LOGGED_IN' });
         navigate('/products');

         setEnteredPassword('');
         setEnteredPasswordTouched(false);

         setEnteredEmail('');
         setEnteredEmailTouched(false);
      } else {
         setEnteredEmailTouched(true);
         setEnteredPasswordTouched(true);
      }
   };

   const nameInputClasses = nameInputIsInvalid
      ? 'form-control invalid'
      : 'form-control';

   const emailInputClasses = enteredEmailIsInvalid
      ? 'form-control invalid'
      : 'form-control';

   return (
      <LogginWrapper>
         <form>
            <div className={emailInputClasses}>
               <label htmlFor="email">Your E-Mail</label>
               <input
                  type="email"
                  id="email"
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputBlurHandler}
                  value={enteredEmail}
               />
               {enteredEmailIsInvalid && (
                  <p className="error-text">Please enter a valid email.</p>
               )}
            </div>
            <div className="form-actions"></div>
            <div className={nameInputClasses}>
               <label htmlFor="name">Password</label>
               <input
                  type="password"
                  id="name"
                  onChange={nameInputChangeHandler}
                  onBlur={nameInputBlurHandler}
                  value={enteredPassword}
               />
               {nameInputIsInvalid && (
                  <p className="error-text">Please enter password.</p>
               )}
            </div>
            <button onClick={formSubmissionHandler}>Submit</button>
         </form>
      </LogginWrapper>
   );
}

const LogginWrapper = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   .login_form {
      height: 250px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
         rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
      display: grid;
      grid-template-rows: 50px 50px 50px;
      gap: 3rem;
      width: 250px;
      padding: 1rem;
      background-color: purple;
   }

   .form-control {
      margin-bottom: 1rem;
   }

   .form-control input,
   .form-control label {
      display: block;
   }

   .form-control label {
      font-weight: bold;
      margin-bottom: 0.5rem;
   }

   .form-control input,
   .form-control select {
      font: inherit;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      width: 20rem;
      max-width: 100%;
   }

   .form-control input:focus {
      outline: none;
      border-color: #240370;
      background-color: #e0d4fd;
   }

   .control-group {
      display: flex;
      column-gap: 1rem;
      flex-wrap: wrap;
   }

   .control-group .form-control {
      min-width: 15rem;
      flex: 1;
   }

   button {
      font: inherit;
      background-color: #240370;
      color: white;
      border: 1px solid #240370;
      padding: 0.5rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
   }

   button:hover,
   button:active {
      background-color: #33059e;
      border-color: #33059e;
   }

   .form-actions {
      text-align: right;
   }

   .form-actions button {
      margin-left: 1rem;
   }

   .invalid input {
      border: 1px solid #b40e0e;
      background-color: #fddddd;
   }

   .invalid input:focus {
      border-color: #ff8800;
      background-color: #fbe8d2;
   }

   .error-text {
      color: #b40e0e;
   }
`;
export default Loggin;
