import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.neutral.white};
  border-radius: 8px;
  margin: 24px 0px 63px;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  display: flex;
  flex-direction: column;
  padding: 35px 40px 40px;

  @media (min-width: 600px) {
    margin: 24px 400px 63px;
    padding: 32px 24px 40px;
  }
`;

export const CardSectionText = styled.span``;
export const CardSectionValue = styled.div``;

export const CardFooterCost = styled.div`
  background-color: ${(props) => props.theme.colors.neutral.white};
  padding: 31px 0px 23px 32px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 600px) {
  }
`;
export const CardFooterCostText = styled.div`
  color: ${(props) => props.theme.colors.typography.blueGray900};

  font-weight: 500;
  font-family: 'Work Sans';
  font-size: 18px;
  line-break: 22px;

  @media (min-width: 600px) {
    font-size: 20px;
    line-height: 24px;
  }
`;
export const CardFooterCostValues = styled.div`
  color: ${(props) => props.theme.colors.typography.brandColorSecondary};
  margin-right: 30px;

  font-weight: 500;
  font-family: 'Rubik';
  font-size: 24px;
  line-break: 29px;

  @media (min-width: 600px) {
    margin-right: 24px;
    font-size: 32px;
    line-height: 38px;
  }
`;
export const CardFooterText = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-family: 'Work Sans';

  text-align: center;

  padding: 24px 32px;

  background-color: ${(props) => props.theme.colors.neutral.blueGray10};
  color: ${(props) => props.theme.colors.typography.blueGray900};
`;
