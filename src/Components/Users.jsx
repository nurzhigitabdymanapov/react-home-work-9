import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const Users = () => {
    const [userName,setUserName] = useState([])
    const [chooseUser,setChooseUser] = useState(null)

   
    const getUsersName = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setUserName(data)
    }
    useEffect(() => {
        getUsersName();
      }, []);
      const getUserHandler = async (user) => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${user.id}`
        );
        const data = await response.json();
        setChooseUser(data);
      };
  return (
    <Card>
          <h1>Students List</h1>
      {userName.map((user) => {
        return (
          <Div key={user.id}>
            <h3 onClick={() => getUserHandler(user)}>{user.name}</h3>
          </Div>
        );
      })}
      {chooseUser && (
        <SecondDiv>
          <H1>User :</H1>
          <h3>{chooseUser.name}</h3>
          <h3> {chooseUser.id}</h3>
        </SecondDiv>
      )}
      
    </Card>
  )
}

const Div = styled.div`
  width: 400px;
  height: 70px;
  border-radius: 10px;
  background-color:#540379;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  

`;
const SecondDiv = styled.div`
  width: 300px;
  background-color: #aa96ea;
  margin-top: 30px;
  text-align: center;
  border-radius: 10px;


`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #540379;
  margin-top: 20px;
`;
const H1 = styled.h1`
  color: #540379;
`;
