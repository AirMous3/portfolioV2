import { ScrollArrow } from '@/widgets';

import * as S from './components';

export const Projectslist = () => {
  return (
    <S.ProjectlistWrapper>
      <S.TitleWrapper>
        <S.Title>
          MY <span>PROJECTS</span>
        </S.Title>
        <S.MainImage />

        <S.ArrowContainer>
          <ScrollArrow />
        </S.ArrowContainer>
      </S.TitleWrapper>
    </S.ProjectlistWrapper>
  );
};
