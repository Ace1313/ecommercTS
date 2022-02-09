import { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../components/context/AppContext';
import { mockInfo } from '../userInformation';
import { useNavigate } from 'react-router-dom';

function Loggin() {
   const { dispatch } = useContext(AppContext);
   const [email, setEmail] = useState<string>('');
   const [emailTouched, setEmailTouched] = useState<boolean>(false);

   const [nameIsValid, nameMessage] = isValidName(email);

   const [password, setPassword] = useState('');

   const nameInputCss = !emailTouched ? '' : nameIsValid ? 'valid' : 'invalid';
   const nameMessageCss = emailTouched
      ? ''
      : 'invisible' + (nameIsValid ? '' : ' error');

   let navigate = useNavigate();

   function submitHandler() {
      if (email === mockInfo[0].email) {
         dispatch({ type: 'SET_LOGGED_IN' });
         navigate('/products');
      } else {
         setEmailTouched(true);
      }
   }

   function isValidName(email: string): [boolean, string] {
      if (email === mockInfo[0].email) {
         return [true, '✔'];
      } else {
         return [false, ' ❌ Fyll ut rätt information'];
      }
   }

   return (
      <LogginWrapper>
         <form className="form">
            <input
               className={nameInputCss}
               onChange={(e) => setEmail(e.target.value)}
               value={email}
               type="text"
               placeholder="Email"
               onBlur={() => setEmailTouched(true)}
            />
            <span className={nameMessageCss}> {nameMessage} </span>
            <input
               onChange={(e) => setPassword(e.target.value)}
               value={password}
               type="password"
               placeholder="Password"
            />
         </form>
         <button onClick={submitHandler}>Login</button>
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

   .formvalid {
      border-color: green;
   }

   .forminvalid {
      border-color: red;
   }
   .form {
      transition: all 1s;
      font-size: 1.2em;
   }
   .form label {
      display: block;
      margin-top: 1em;
   }
   .form input {
      border: 4px solid gray;
      border-radius: 4px;
      padding: 0.2em 0.4em;
      font-size: 0.9em;
   }
   .form .valid {
      border-color: green;
   }
   .form .invalid {
      border-color: red;
   }
   .invisible {
      visibility: hidden;
   }
   .form {
      background-color: #eceade;
      padding: 1em;
   }
   .form .error {
      color: #e34343;
   }
`;
export default Loggin;
