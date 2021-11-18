import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: ${(props) => props.theme.colors.neutral.white};
  height: 56px;
  width: 100%;
  display: flex;

  .logo-image {
    margin: 16px 0px 16px 16px;

    width: 75px;
    height: 24px;
  }

  @media (min-width: 600px) {
    height: 80px;
    .logo-image {
      margin: 24px 0px 24px 56px;
      width: 100px;
      height: 32px;
    }
  }
`;
