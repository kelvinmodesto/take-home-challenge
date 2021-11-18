import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) =>
    props.theme.colors.typography.brandColorPrimary};

  border-radius: 32px;

  color: ${(props) => props.theme.colors.neutral.white};
  font-size: 16px;
  line-height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-width: 0px;

  cursor: pointer;

  padding: 16px;

  height: 56px;

  @media (min-width: 600px) {
    height: 40px;
    width: 320px;
    margin: auto;
  }
`;
