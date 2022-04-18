import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as Visible } from "../Image/visible.svg";
import { ReactComponent as NoneVisible } from "../Image/noneVisible.svg";
import { ReactComponent as Check } from "../Image/check.svg";

function Input() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordType, setPasswordType] = useState(false);

  const checkEmail = () => {
    const emailReg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!emailReg.test(email)) {
      setEmailCheck(false);
    } else {
      setEmailCheck(true);
    }
  };

  useEffect(() => {
    checkEmail();
  }, [email]);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <LoginBox>
        <div>E-mail</div>
        <InputBox>
          <input
            type="email"
            placeholder={"E-mail"}
            value={email}
            onChange={onChangeEmail}
          />
          {emailCheck ? <Check fill="#000000" /> : <Check fill="#cecece" />}
        </InputBox>

        {email && !emailCheck && (
          <label style={{ color: "red" }}>Invalid e-mail address</label>
        )}
      </LoginBox>

      <LoginBox>
        <div>Password</div>
        <InputBox>
          <input
            type={passwordType ? "text" : "password"}
            placeholder={"Password"}
            value={password}
            onChange={onChangePassword}
          />
          {passwordType ? (
            <NoneVisible onClick={() => setPasswordType(!passwordType)} />
          ) : (
            <Visible onClick={() => setPasswordType(!passwordType)} />
          )}
        </InputBox>
      </LoginBox>
    </>
  );
}
const LoginBox = styled.form`
  width: 300px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 10px;
  padding: 0 25px;

  &,
  & input {
    width: 100%;
    background-color: #f1f1f1;
    font-size: 16px;
    border: none;
  }

  input:focus {
    outline: none;
  }
`;

export default Input;
