import styled, { keyframes } from 'styled-components/macro';

import noiseImage from '@/shared/assets/noise.png';

const b = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
`;

export const NoiseWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vw;
  background: url(${noiseImage}) repeat 50%/190px 190px;
  animation: ${b} 0.24s steps(4) forwards infinite;
  z-index: 9999;
  opacity: 0.21;
  transition: 1.1s linear 0.5s;
  pointer-events: none;
`;
