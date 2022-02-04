import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from './context/AppContext';
import { mockInfo } from '../userInformation';

function Loggin() {
   const { dispatch, state } = useContext(AppContext);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function submitHandler() {
      if (mockInfo[0].email === email && mockInfo[0].password === password) {
         dispatch({ type: 'SET_LOGGED_IN' });
      } else {
         return console.log('false', state);
      }
   }

   return (
      <LogginWrapper>
         <form className="login_form">
            <input
               onChange={(e) => setEmail(e.target.value)}
               value={email}
               type="text"
               placeholder="Email"
            />
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
`;
export default Loggin;
