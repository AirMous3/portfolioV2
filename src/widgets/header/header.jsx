import * as S from './components';

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.Logo>
        Created by <span>Ilya Holakhau</span>
      </S.Logo>

      <S.Nav>
        <S.NavWrapper>
          <li>The Projects</li>
          <li>Experience</li>
          <li>Opportunities</li>
        </S.NavWrapper>
      </S.Nav>
    </S.HeaderWrapper>
  );
};
