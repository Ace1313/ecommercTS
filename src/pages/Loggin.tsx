import { useState } from 'react';
import styled from 'styled-components';

import { mockInfo } from '../userInformation';
import { useNavigate } from 'react-router-dom';

function Loggin() {
   let navigate = useNavigate();

   const [enteredEmail, setEnteredEmail] = useState('');
   const [enteredPassword, setEnteredPassword] = useState('');
   const [isValid, setIsValid] = useState(false);

   const valid =
      mockInfo[0].email === enteredEmail && mockInfo[0].password === enteredPassword;

   const formSubmissionHandler = (event: any) => {
      event.preventDefault();

      if (valid) {
         navigate('/products');
      }

      setIsValid(true);
   };

   return (
      <LogginWrapper>
         <form className="form-control" onSubmit={formSubmissionHandler}>
            <div>
               <label htmlFor="email">Email</label>
               <input
                  required={true}
                  onChange={(e) => setEnteredEmail(e.target.value)}
                  type="email"
                  id="email"
                  value={enteredEmail}
               />
            </div>
            <div className="form-actions"></div>
            <div>
               <label htmlFor="name">Password</label>
               <input
                  required={true}
                  onChange={(e) => setEnteredPassword(e.target.value)}
                  type="password"
                  id="password"
                  value={enteredPassword}
               />
            </div>
            <button>Submit</button>
         </form>
         {isValid && (
            <h2 className="error">Please enter correct Email or Password</h2>
         )}
      </LogginWrapper>
   );
}

const LogginWrapper = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   .error {
      color: #b40e0e;
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

   .form-control {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
         rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      height: 350px;
      justify-content: center;
      display: grid;
      border-radius: 8px;
      background: #e0d4fd;
      padding: 1rem;
   }

   label {
      text-align: center;
      font-size: 18px;
   }

   input {
      padding: 0.5rem;
      border-radius: 6px;
      border: 1px solid #ccc;
      width: 20rem;
      max-width: 80%;
      margin: auto;
      text-align: center;
      outline: none;
      background: whitesmoke;
   }

   input:focus {
      outline: none;
      border-color: #240370;
      background-color: #e79fe9;
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

   .form-actions button {
      margin-left: 1rem;
   }
`;
export default Loggin;
