import styled from 'styled-components/macro';

const ContainerWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
`;

export const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};
