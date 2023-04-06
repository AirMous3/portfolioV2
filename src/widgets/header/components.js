import styled from 'styled-components/macro';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
  font-family: 'Adrianna Extended Lt', sans-serif;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 18px;

  span {
    font-size: 25px;
    font-family: 'Adrianna Rg', sans-serif;
  }
`;

export const Nav = styled.nav`
  margin-right: 100px;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
`;

export const NavWrapper = styled.ul`
  display: flex;

  li {
    margin-right: 25px;
    cursor: pointer;
  }
`;
