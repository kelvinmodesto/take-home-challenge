import styled from 'styled-components';

export const CardHeader = styled.div`
  display: flex;
`;

export const CardHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;
export const CardHeaderTitle = styled.span`
  font-family: Rubik;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;

  color: ${(props) => props.theme.colors.typography.blueGray900};

  @media (min-width: 600px) {
    font-size: 24px;
    line-height: 29px;
  }
`;
export const CardHeaderSubtitle = styled.span`
  font-family: 'Work Sans';
  font-size: 14px;
  line-height: 21px;
  margin-top: 4px;
  color: ${(props) => props.theme.colors.typography.blueGray400};

  @media (min-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
