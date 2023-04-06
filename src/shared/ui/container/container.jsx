import styled from 'styled-components/macro';

const ContainerWrapper = styled.div`
  margin: 150px auto;
  width: 70%;
`;

export const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};
