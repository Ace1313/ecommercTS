import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsCart2 } from 'react-icons/bs';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function Navbar() {
   const { state } = useContext(AppContext);

   return (
      <Wrapper>
         <ul className="nav_links">
            <li>
               <Link className="links" to="/products">
                  Products
               </Link>
            </li>
            <li>
               <Link data-testid="cartAmount" className="links" to="/cart">
                  <BsCart2 />
                  {state.cart.length >= 1 && state.cart.length}
               </Link>
            </li>
         </ul>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   padding: 1rem 2rem 1rem 2rem;
   margin-top: 1rem;

   .nav_links {
      padding: 1rem;
      display: flex;
      justify-content: space-around;
   }

   li {
      list-style: none;
   }

   .links {
      text-decoration: none;
      padding: 1rem;
      font-size: 23px;
      color: black;
   }

   .links:hover {
      color: #11dd7e;
      border-bottom: 2px solid black;
      transition: ease-in 0.5s;
   }
`;

export default Navbar;
