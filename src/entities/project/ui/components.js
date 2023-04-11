import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

export const ProjectWrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 300px;
`;

export const ProjectTitle = styled(motion.div)`
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

export const ProjectInfoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const ProjectDescriptionWrapper = styled.div`
  max-width: 35vw;
  margin-top: 25px;
`;

export const ProjectDescription = styled(motion.p)`
  font-family: 'Adrianna Extended Th', sans-serif;
  font-size: 17px;
  font-weight: 600;

  span {
    font-family: 'Druk', sans-serif;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const ProjectImage = styled(motion.div)`
  position: absolute;
  z-index: -1;
  top: -165px;
  left: -20px;
  background-image: url(${({ image }) => image});
  height: 36vw;
  width: 27vw;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.88;
`;
