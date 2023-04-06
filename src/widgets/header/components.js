import styled from 'styled-components/macro';

import githubIcon from '@/shared/assets/icons/github.svg';
import tgIcon from '@/shared/assets/icons/telegram.svg';
import wiggle from '@/shared/assets/icons/wiggle.svg';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
  font-family: 'Adrianna Extended Lt', sans-serif;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #1a1a1e;
`;

export const Logo = styled.div`
  font-size: 18px;

  span {
    font-size: 25px;
    font-family: 'Druk', sans-serif;
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

export const SocialNav = styled.nav`
  position: fixed;
  bottom: 200px;
  right: -60px;
  transform: rotate(-90deg) translateY(-50%);
`;

export const SocialWiggle = styled.div`
  padding-left: 50px;
  font-weight: 600;
  letter-spacing: 0.17em;
  font-size: 11.5px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    width: 50px;
    height: 8px;
    background: url(${wiggle}) no-repeat 50%/100%;
    margin-right: 20px;
  }
`;

export const SocialUl = styled.ul`
  display: flex;
  margin-top: -19px;
  margin-left: -45px;

  li {
    margin-right: 20px;
  }
`;

export const TGspan = styled.span`
  background-image: url(${tgIcon});
  display: block;
  width: 25px;
  height: 25px;
  background-size: contain;
  transform: rotate(90deg) translateX(2px);
`;

export const GITspan = styled(TGspan)`
  background-image: url(${githubIcon});
`;
