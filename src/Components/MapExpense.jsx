import React from "react";
import styled from "styled-components";

export const MapExpense = ({ setTodos, todos, el }) => {
  const deleteExpense = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  return (
    <CardContainer>
      <Date>{el.date}</Date>
      <Text>{el.title}</Text>
      <PriceAndDelete>
        <Price>{el.amound}$</Price>
        <Delete onClick={() => deleteExpense(el.id)}>Delete</Delete>
      </PriceAndDelete>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #545151;
  border-radius: 10px;
  margin-top: 20px;
`;
const Date = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #232222;
  border-radius: 10px;
  margin-left: 20px;
  border: 1px solid white;
`;
const Price = styled.div`
  background-color: #540379;
  width: 90px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid white;
`;
const Delete = styled.button`
  background-color: #540379;
  width: 90px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid white;
  color: white;
  margin-right: 20px;
`;
const PriceAndDelete = styled.div`
width: 250px;
display: flex;
justify-content: space-between;
`
const Text = styled.h2`
  display: flex;
  justify-content: flex-start;
  width: 50%;

`