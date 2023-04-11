import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import * as S from './components';

export const Project = ({ title, subtitle, description, technologies, image }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const titleYPosition = useTransform(scrollYProgress, [0, 1], [-80, 40]);
  const imageYPosition = useTransform(scrollYProgress, [0, 1], [-60, 20]);
  const descriptionYPosition = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  return (
    <S.ProjectWrapper ref={ref}>
      <S.ProjectTitle style={{ y: titleYPosition }}>
        <span>{title}</span> {subtitle}
      </S.ProjectTitle>

      <S.ProjectInfoWrapper>
        <S.ProjectImage style={{ y: imageYPosition }} image={image}/>

        <S.ProjectDescriptionWrapper>
          <S.ProjectDescription style={{ y: descriptionYPosition }}>
            {description}
          </S.ProjectDescription>

          <S.ProjectDescription style={{ y: descriptionYPosition }}>
            <span>Project Technologies</span>: {technologies}
          </S.ProjectDescription>
        </S.ProjectDescriptionWrapper>
      </S.ProjectInfoWrapper>
    </S.ProjectWrapper>
  );
};
