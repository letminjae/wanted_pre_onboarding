import React, { useState } from "react";
import styled from "styled-components";

function Tab() {
  const [isTab, setisTab] = useState(0);
  const Data = ["감자", "고구마", "카레라이스"];

  const handleTab = (index) => {
    setisTab(index);
  };

  return (
    <>
      <Tabbar>
        {Data.map((el, index) => {
          return (
            <NavbarButton
              key={index}
              onClick={() => {
                handleTab(index);
              }}
              isClicked={isTab === index ? true : false}
            >
              {el}
            </NavbarButton>
          );
        })}
      </Tabbar>
      <TabBottomLine>
        <ClickBottomLine isClicked={isTab} />
      </TabBottomLine>
    </>
  );
}

const Tabbar = styled.div`
  display: flex;
  width: 600px;
  height: 40px;
`;

const NavbarButton = styled.div`
  width: 200px;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  color: ${({ isClicked }) => (isClicked ? "black" : "#cecece")};
`;

const TabBottomLine = styled.div`
  width: 600px;
  height: 2px;
  background-color: #cecece;
`;

const ClickBottomLine = styled.div`
  position: absolute;
  width: 200px;
  height: 2px;
  background-color: black;
  transition: all 0.1s ease-in-out;
  transform: ${({ isClicked }) => `translateX(${isClicked * 200}px)`};
`;

export default Tab;
