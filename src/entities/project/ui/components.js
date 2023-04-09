import styled from 'styled-components/macro';

import projectsImage from '@/shared/assets/projectImages/conquer.webp';

export const ProjectWrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 350px;
`;

export const ProjectTitle = styled.div`
  position: relative;
  color: inherit;
  font-size: 7vw;
  line-height: 1em;
  margin-left: 30%;

  span {
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    -moz-text-stroke-color: #1a1a1e;
    -webkit-text-stroke-color: #1a1a1e;
    -moz-text-stroke-width: 1.2px;
    -webkit-text-stroke-width: 1.2px;
  }
`;

export const ProjectDescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const ProjectDescription = styled.p`
  max-width: 550px;
  margin-top: 50px;
`;

export const ProjectImage = styled.div`
  position: absolute;
  z-index: -1;
  top: -165px;
  left: -20px;
  background-image: url(${projectsImage});
  height: 36vw;
  width: 27vw;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.88;
`;
