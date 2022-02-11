import { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../components/context/AppContext';
import { mockInfo } from '../userInformation';
import { useNavigate } from 'react-router-dom';

function Loggin() {
   const { dispatch } = useContext(AppContext);
   let navigate = useNavigate();

   const [enteredEmail, setEnteredEmail] = useState('');
   const [enteredPassword, setEnteredPassword] = useState('');
   const [emailTouched, setEmailTouched] = useState(false);
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

   console.log(emailTouched);

   return (
      <LogginWrapper>
         <form className="form-control" onSubmit={formSubmissionHandler}>
            <div>
               <label htmlFor="email">Your E-Mail</label>
               <input
                  required={true}
                  onChange={(e) => setEnteredEmail(e.target.value)}
                  type="email"
                  id="email"
                  value={enteredEmail}
                  onBlur={() => setEmailTouched(true)}
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
            <h3 className="error">Please enter correct Email or password</h3>
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
   }

   label {
      text-align: center;
      font-size: 18px;
   }

   input {
      font: inherit;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      width: 20rem;
      max-width: 80%;
      margin: auto;
      text-align: center;
   }

   input:focus {
      outline: none;
      border-color: #240370;
      background-color: #e0d4fd;
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
