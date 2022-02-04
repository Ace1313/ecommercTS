import styled from 'styled-components';

function Header() {
   return (
      <HeaderWrapper>
         <h1>LOGO</h1>
         <h1>CART</h1>
      </HeaderWrapper>
   );
}

const HeaderWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 1rem 2rem 1rem 2rem;
   background-color: #55135e;
   height: 50vh;
   border-bottom-left-radius: 50% 40%;
   border-bottom-right-radius: 50% 40%;
`;
export default Header;
