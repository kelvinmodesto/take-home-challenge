import styled from 'styled-components';

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.neutral.blueGray10};
  margin-bottom: 32px;
`;
