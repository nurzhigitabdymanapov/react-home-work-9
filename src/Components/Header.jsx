import React, { useState } from "react";
import { Users } from "./Users";
import { Expense } from "./Expense";
import styled from "styled-components";
export const Header = ({ setOpenHeader }) => {
  const [openUsers, setOpenUsers] = useState(false);

  const close = () => {
    setOpenHeader(false);
    localStorage.clear()
  };

  const openUsersHandler = () => {
    setOpenUsers(true);
  };

  return (
    <div>
      <HeaderContainer>
        <Button onClick={() => setOpenUsers(false)}>Expenses</Button>
        <Button onClick={openUsersHandler}>Users</Button>
        <Button onClick={close}>Logout</Button>
      </HeaderContainer>
      
      <div>{openUsers ? <Users /> : <Expense />}</div>
    </div>
  );
};
const HeaderContainer = styled.div`
  background-color:#aa96ea;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: end;
  align-items: center;

`
const Button = styled.button`
  width: 95px;
  height: 45px;
  margin-right: 20px;
  background-color: #540379;
  border-radius: 10px;
  border: 0;
  color: #fff;
`