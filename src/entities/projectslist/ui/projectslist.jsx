import { Project } from '@/entities';
import { ScrollArrow } from '@/widgets';

import * as S from './components';

export const Projectslist = () => {
  return (
    <S.ProjectlistWrapper>
      <S.TitleWrapper>
        <S.Title>
          <S.StrokedText>MY</S.StrokedText> PROJECTS
        </S.Title>
        <S.MainImage />

        <S.ArrowContainer>
          <ScrollArrow />
        </S.ArrowContainer>
      </S.TitleWrapper>

      <Project />
    </S.ProjectlistWrapper>
  );
};
