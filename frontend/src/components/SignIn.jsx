import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  gap: 36px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

function SignIn() {
  return (
    <Container>
      <div>
        <Title>Welcom to Fittrack 👋</Title>
        <Span>Please login with your details here</Span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <TextInput label="Email Address" placeholder="Enter your email" />
        <TextInput
          label="Password Address"
          placeholder="Enter your password"
          password
        />
        <Button text="SignIn" />
      </div>
    </Container>
  );
}

export default SignIn;
