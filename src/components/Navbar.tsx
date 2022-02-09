import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
   return (
      <Wrapper>
         <ul>
            <Link className="links" to="/cart">
               Cart
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

   .links {
      text-decoration: none;
      text-style: none;
      padding: 1rem;
      font-size: 23px;
      color: white;
   }

   .links:hover {
      color: #dda711;
      border-bottom: 2px solid purple;
      transition: ease-in 1s;
   }
`;

export default Navbar;
