import React, { useState } from "react";
import styled, { css } from "styled-components";

function Toggle() {
  const [isToggle, setIsToggle] = useState(false);

  const HandleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <Container onClick={HandleToggle}>
      <ToggleBtn isClicked={isToggle}>기본</ToggleBtn>
      <ToggleBtn isClicked={!isToggle}>상세</ToggleBtn>
      <ToggleBackground isClicked={isToggle} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cecece;
  width: 400px;
  height: 50px;
  border-radius: 50px;
  z-index: 1;
`;

const ToggleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  color: ${({ isClicked }) => (isClicked ? "black" : "#f8f8f8")};
  cursor: pointer;
  z-index: 999;
`;

const ToggleBackground = styled.div`
  position: absolute;
  background-color: #fff;
  width: 197px;
  height: 44px;
  border-radius: 50px;
  z-index: 99;
  transition: all 0.1s ease-in-out;
  ${({ isClicked }) =>
    isClicked
      ? css`
          transform: translatex(-50%);
        `
      : css`
          transform: translatex(50%);
        `}
`;

export default Toggle;
