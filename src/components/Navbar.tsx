import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
   return (
      <div>
         <ul>
            <Link to="/cart">Cart</Link>
         </ul>
      </div>
   );
}

export default Navbar;
