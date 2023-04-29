import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Login = ({ setOpenHeader, openHeader }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState();
  const [passwordValid, setPasswordValid] = useState();
  const [valid, setValid] = useState(false);

  const addLogin = () => {
    localStorage.setItem("login", !openHeader);
    setOpenHeader(true);
  };

  useEffect(() => {
    setOpenHeader(localStorage.getItem("login"));
  }, [openHeader]);
  const validEmail = (e) => {
    setMail(e.target.value);
    setValid(e.target.value.includes("@") && password.trim().length >= 8);
  };
  const validPassword = (e) => {
    setPassword(e.target.value);
    setValid(e.target.value.trim().length >= 8 && mail.includes("@"));
  };
  const emailHandler = () => {
    setEmailValid(mail.includes("@"));
  };
  const passwordHandler = () => {
    setPasswordValid(password.trim().length >= 8);
  };
  return (
    <ContainerLogin>
      <LoginHeader></LoginHeader>

      <LoginContainer>
        <FirstContainerLogin>
          <div>
            <LoginLabelEmail>
              E - mail
              <LoginInput
                onBlur={emailHandler}
                name="email"
                onChange={validEmail}
                type="email"
                value={mail}
                style={
                  emailValid === false
                    ? { backgroundColor: "#ff0d0d9a" }
                    : { backgroundColor: "#7baef66e" }
                }
              />
            </LoginLabelEmail>
          </div>
          <div>
            <label>
              Password
              <LoginInput
                onBlur={passwordHandler}
                name="password"
                onChange={validPassword}
                type="password"
                value={password}
                style={
                  passwordValid === false
                    ? { backgroundColor: "#ff0d0d9a" }
                    : { backgroundColor: "#7baef66e" }
                }
              />
            </label>
          </div>
        </FirstContainerLogin>
        <SecondContainerLogin>
          <LoginButton onClick={addLogin} disabled={!valid}>
            Login
          </LoginButton>
        </SecondContainerLogin>
      </LoginContainer>
    </ContainerLogin>
  );
};
const LoginHeader = styled.div`
  background-color: #aa96ea;
  width: 100%;
  height: 60px;
`;
const LoginContainer = styled.div`
  width: 650px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;
const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
const FirstContainerLogin = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SecondContainerLogin = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginInput = styled.input`
  width: 400px;
  height: 30px;
  margin-top: 20px;
  margin-left: 40px;
  border-radius: 5px;
  border: 0;

`;
const LoginButton = styled.button`
  background-color: #540379;
  width: 110px;
  height: 45px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginLabelEmail = styled.label`
  margin-left: 10px;
`;
