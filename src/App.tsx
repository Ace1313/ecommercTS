import Loggin from './pages/Loggin';
import ProductContainer from './pages/Products';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppContext } from './components/context/AppContext';
import { useContext } from 'react';
import Cart from './pages/Cart';

function App() {
   const { state } = useContext(AppContext);
   console.log(state.isLoggedIn);

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/home" element={<Loggin />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/products" element={<ProductContainer />} />
            <Route path="/cart" element={<Cart />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
