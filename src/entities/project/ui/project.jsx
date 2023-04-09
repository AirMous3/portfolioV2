import { useScroll, useTransform } from 'framer-motion';

import * as S from './components';

export const Project = () => {
  const { scrollY } = useScroll();
  const titleYPosition = useTransform(scrollY, (value) => value / -3);
  const imageYPosition = useTransform(scrollY, (value) => value / -2);
  const descriptionYPosition = useTransform(scrollY, (value) => value / -3.5);

  return (
    <S.ProjectWrapper>
      <S.ProjectTitle style={{ y: titleYPosition }}>
        <span>Conquer</span> startup
      </S.ProjectTitle>
      <S.ProjectInfoWrapper>
        <S.ProjectImage style={{ y: imageYPosition }} />

        <S.ProjectDescriptionWrapper>
          <S.ProjectDescription style={{ y: descriptionYPosition }}>
            Had a part of creation a No-code platform for creating sites with integration
            into existing React applications. Wrote a system for parsing jsx/tsx files,
            defining components and their props. Added the output of the components
            existing in the project to the visual editor. Implemented a backend service
            for rendering components in the browser emulator (Playwright) to display
            component screenshots. Parsed redux stores to visually display them and edit
            them using the react-flow library.Constant interaction with the back-end team,
            marketing, testers. SCRUM. Atlassian confluence
          </S.ProjectDescription>

          <S.ProjectDescription style={{ y: descriptionYPosition }}>
            <span>Project Technologies</span>: react, redux, redux-thunk, typescript,
            grapejs, next.js, reactflow, emotion, etc.
          </S.ProjectDescription>
        </S.ProjectDescriptionWrapper>
      </S.ProjectInfoWrapper>
    </S.ProjectWrapper>
  );
};
