import React, { useState } from "react";
import styled from "styled-components";

function Dropdown() {
  const [value, setValue] = useState("All Symbols");
  const [isClicked, setIsClicked] = useState(false);
  const [search, setSearch] = useState("");

  const onChangeSymbol = (e) => {
    setSearch(e.target.value);
    onchange(null);
  };

  const changeValue = (_value) => {
    setValue(_value);
    setIsClicked(false);
  };

  const changeTab = () => {
    setIsClicked(!isClicked)
  };

  const Data = [
    "All Symbols",
    "BTCUSD.PERP",
    "ETHUSD.PERP",
    "ADAUSD.PERP",
    "XRPUSD.PERP",
    "LTCUSD.PERP",
    "BCHUSD.PERP",
    "SANDBOXUSD.PERP",
    "SUSHIUSD.PERP",
    "ETCUSD.PERP",
    "UNIUSD.PERP",
  ];

  return (
    <Container>
      <TextBox onClick={changeTab}>{value}</TextBox>
      {isClicked && (
        <ListBox>
          <SearchBox placeholder="Search Symbol" onChange={onChangeSymbol} />
          {Data.filter((el) => {
            if (search === "") {
              return el
            } else if(el.toLowerCase().includes(search.toLowerCase())) {
              return el
            }
          }).map((el, index) => {
            return (
              <Option key={index} onClick={() => changeValue(el)}>
                {el}
              </Option>
            );
          })}
        </ListBox>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const TextBox = styled.div`
  width: 300px;
  height: 20px;
  cursor: pointer;
  border: 1px solid #cecece;
  padding: 12px 16px;

  &::before {
    content: "";
    position: absolute;
    right: 20px;
    top: 15px;
    z-index: 999;
    width: 8px;
    height: 8px;
    border: 2px solid #333;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(-45deg);
  }
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #cecece;
  position: absolute;
  top: 60px;
`;

const SearchBox = styled.input`
  width: 300px;
  border: none;
  border-bottom: 1px solid #cecece;
  padding: 12px 16px;

  &:focus {
    outline: none;
  }
`;

const Option = styled.div`
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    background-color: #cecece;
  }
`;

export default Dropdown;
