import React from "react";
import styled from "styled-components";
export const ChartBar=({ maxPercentPrice, currentPrice, label }) =>{
  const fillHeight = Math.round(100 * currentPrice) / maxPercentPrice;

  return (
    <ChardBars>
      <ChartBarInner >
        <ChartBarFill
          style={{ height: `${fillHeight}px` }}
        ></ChartBarFill>
      </ChartBarInner>
      <ChartBarLabel >{label}</ChartBarLabel>
    </ChardBars>
  );
}
const ChardBars = styled.div`
height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ChartBarInner = styled.div`
      width: 20px;
    height: 100px;
    border: 1px solid #313131;
    border-radius: 0.7rem;
    background-color: #c3b4f3;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const ChartBarFill = styled.div`
    background-color: #4826b9;
    width: 100%;
    transition: all 1s ease-out;
    display: flex;
`
const ChartBarLabel = styled.div`
   font-weight: bold;
    font-size: 1rem;
    text-align: center;
`
