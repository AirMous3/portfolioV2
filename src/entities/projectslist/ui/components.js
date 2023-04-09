import styled from 'styled-components/macro';

import projectImage from '@/shared/assets/mainImage.jpg';

export const ProjectlistWrapper = styled.div`
  font-family: 'Druk', sans-serif;
  user-select: none;
  margin-top: 200px;
`;

export const Title = styled.h1`
  font-size: 7vw;
  letter-spacing: 0.02em;
  line-height: 0.85em;
  color: ${({ theme }) => theme.colors.text.main};

`;

export const MainImage = styled.div`
  position: absolute;
  z-index: -1;
  top: -60px;
  right: 0;
  background-image: url(${projectImage});
  width: 50vw;
  height: 450px;
  background-repeat: no-repeat;
`;

export const TitleWrapper = styled.div`
  position: relative;
  height: 450px;
  z-index: -1;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const StrokedText = styled.span`
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  -moz-text-stroke-color: #1a1a1e;
  -webkit-text-stroke-color: #1a1a1e;
  -moz-text-stroke-width: 1.2px;
  -webkit-text-stroke-width: 1.2px;
`;
