import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  .theme-i18n {
    display: flex;
    gap: 30px;
    justify-content: end;

    width: calc(100% - 50px);
    height: 75px;

    button {
      height: 30px;
    }
  }
`;
