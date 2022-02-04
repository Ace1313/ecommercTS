import Header from './components/Header';
import Loggin from './components/Loggin';
import ProductContainer from './components/ProductContainer';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { AppContext } from './components/context/AppContext';
import { useContext } from 'react';

function App() {
   const { state } = useContext(AppContext);
   console.log(state.isLoggedIn);

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Loggin />} />
            <Route path="/products" element={<ProductContainer />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
