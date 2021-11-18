import styled from 'styled-components';

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
