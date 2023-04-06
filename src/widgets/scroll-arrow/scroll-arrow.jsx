import styled from 'styled-components/macro';

import arrow from '@/shared/assets/icons/down-arrow.svg';

const ArrowWrapper = styled.div`
  background-image: url(${arrow});
  height: 95px;
  width: 86px;
  background-size: 86px 95px;
  background-repeat: no-repeat;
}
`;

export const ScrollArrow = () => {
  return <ArrowWrapper />;
};
