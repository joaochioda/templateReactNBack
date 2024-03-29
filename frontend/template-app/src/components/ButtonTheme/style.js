import styled from "styled-components";

export const ButtonThemeWrapper = styled.div`
  display: flex;
  align-items: center;

  transform: scale(0.8);
  .checkbox {
    opacity: 0;
    position: relative;
  }

  .label {
    background-color: #111;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 26px;
    width: 50px;
    transform: scale(1.5);
  }

  .label .ball {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(24px);
  }

  .fa-moon {
    color: #f1c40f;
    position: absolute;
    right: 5px;
  }

  .fa-sun {
    color: #f39c12;
  }
`;
