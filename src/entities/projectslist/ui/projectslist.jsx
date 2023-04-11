import { useScroll, useTransform } from 'framer-motion';

import { Project } from '@/entities';

import * as S from './components';
import { projectsConfig } from './projectsConfig';

export const Projectslist = () => {
  const { scrollY } = useScroll();
  const titleYPosition = useTransform(scrollY, (value) => value / -2);
  const mainImageYPosition = useTransform(scrollY, (value) => value / -4);
  const arrowYPosition = useTransform(scrollY, (value) => value / -2);

  return (
    <S.ProjectlistWrapper>
      <S.TitleWrapper>
        <S.Title style={{ y: titleYPosition }}>
          <S.StrokedText>MY</S.StrokedText> PROJECTS
        </S.Title>
        <S.MainImage style={{ y: mainImageYPosition }} />

        <S.ArrowContainer>
          <S.ScrollArrow style={{ y: arrowYPosition }} />
        </S.ArrowContainer>
      </S.TitleWrapper>

      {projectsConfig.map(({ description, subtitle, image, title, technologies }) => (
        <Project
          description={description}
          title={title}
          subtitle={subtitle}
          image={image}
          technologies={technologies}
        />
      ))}
    </S.ProjectlistWrapper>
  );
};
