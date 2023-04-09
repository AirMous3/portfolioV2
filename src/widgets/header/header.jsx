import * as S from './components';

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.Logo>
        Created by <span>Ilya Holakhau</span>
      </S.Logo>

      <S.Nav>
        <S.NavWrapper>
          <li>
            <S.NavLink href="#Projects">The Projects</S.NavLink>
          </li>
          <li>
            <S.NavLink href="#Experience">Experience</S.NavLink>
          </li>
          <li>
            <S.NavLink href="#Opportunities">Opportunities</S.NavLink>
          </li>
        </S.NavWrapper>
      </S.Nav>

      <S.SocialNav>
        <S.SocialWiggle>SOCIAL</S.SocialWiggle>

        <S.SocialUl>
          <li>
            <a href="https://t.me/ilholak" target="_blank" rel="noreferrer noopener">
              <S.TGspan />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/AirMous3"
              target="_blank"
              rel="noreferrer noopener"
            >
              <S.GITspan />
            </a>
          </li>
        </S.SocialUl>
      </S.SocialNav>
    </S.HeaderWrapper>
  );
};
