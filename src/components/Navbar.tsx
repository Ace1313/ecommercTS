import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsCart2 } from 'react-icons/bs';

function Navbar() {
   return (
      <Wrapper>
         <ul>
            <Link className="links" to="/cart">
               <BsCart2 />
            </Link>

            <Link className="links" to="/products">
               Products
            </Link>
         </ul>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   padding: 1rem 2rem 1rem 2rem;
   margin-top: 1rem;
   display: flex;
   justify-content: space-around;

   .links {
      text-decoration: none;
      padding: 1rem;
      font-size: 23px;
      color: black;
   }

   .links:hover {
      color: #11dd7e;
      border-bottom: 2px solid purple;
      transition: ease-in 1s;
   }
`;

export default Navbar;
