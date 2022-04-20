import React, { useState } from "react";
import styled from "styled-components";

function Slider() {
  const [currentPercent, setCurrentPercent] = useState(1);
  const Percent = [1, 25, 50, 75, 100];

  const onChangePercent = (e) => {
    setCurrentPercent(e.target.value);
  };

  const onClickButtonPercent = (e) => {
    setCurrentPercent(e.currentTarget.value);
  };

  return (
    <Container>
      <PercentBox>
        {currentPercent}
        <span className="percent">%</span>
      </PercentBox>

      <input
        type="range"
        min={1}
        max={100}
        value={currentPercent}
        onChange={onChangePercent}
        step={1}
        style={{ width: "100%", marginTop: "15px" }}
      />

      <PercentInfo>
        {Percent.map((el) => (
          <div key={el}>
            <PercentButton value={el} onClick={onClickButtonPercent}>
              {el}%
            </PercentButton>
          </div>
        ))}
      </PercentInfo>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const PercentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid #cecece;
  border-radius: 5px;
  width: 300px;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  .percent {
    color: #cecece;
    position: absolute;
    right: 10px;
    font-weight: 400;
    font-size: 14px;
  }
`;

const PercentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const PercentButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #eee;
  width: 45px;
  height: 20px;
  color: #999;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #999;
    color: #fefefe;
  }
`;

export default Slider;
