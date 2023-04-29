import React, { useEffect, useState } from "react";
import { MapExpense } from "./MapExpense";
import { Chart } from "./Chart";
import styled from "styled-components";

export const Expense = () => {
  const [title, setTitle] = useState("");
  const [amound, setAmound] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todo")) || [
      {
        title: "Table",
        amound: 1700,
        date: "2023-04-16",
        id: "1",
      },
    ]
  );

  const addExpense = () => {
    if (title && amound && date !== "") {
      const data = {
        title: title,
        amound: amound,
        date: date,
        id: Math.random(),
      };
      setTodos([...todos, data]);
    }
    setAmound("");
    setDate("");
    setTitle("");
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <Div>
      <ContainerExpenses>
        <UpInputsContainer>
          <label>Title</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />

          <label>Date</label>
          <Input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
        </UpInputsContainer>
        <DownInputsContainer>
          <label>Amount</label>
          <Input
            value={amound}
            onChange={(e) => setAmound(e.target.value)}
            type="number"
          />
          <ExpenseButtonDiv>
            <ExpenseButton onClick={addExpense}>Add Expense</ExpenseButton>
          </ExpenseButtonDiv>
        </DownInputsContainer>
      </ContainerExpenses>
      <ExpenseContainer>
        <>
          <Chart items={todos} />
          {todos.map((el) => {
            return <MapExpense setTodos={setTodos} el={el} todos={todos} />;
          })}
        </>
      </ExpenseContainer>
    </Div>
  );
};

const ExpenseContainer = styled.div`
  width: 747px;
  height: 100%;
  padding: 10px;
  background-color: #232222;
  border-radius: 10px;
`;
const Div = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerExpenses = styled.div`
  width: 747px;
  height: 210px;
  background-color: #aa96ea;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  display: flex;
`;
const UpInputsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;
const DownInputsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 80px;
`;
const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: 0;
`;

const ExpenseButtonDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: end;
  align-items: end;
  margin-left: 70px;
`;
const ExpenseButton = styled.button`
  width: 150px;
  height: 45px;
  margin-right: 20px;
  background-color: #540379;
  border-radius: 10px;
  border: 0;
  color: #fff;
  margin-top: 20px;
`;
