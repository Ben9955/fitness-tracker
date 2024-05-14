import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

const Container = styled.div``;
const Title = styled.h2``;
const Span = styled.p``;

function SignUp() {
  return (
    <Container>
      <div>
        <Title>Welcom to fittrack 👋</Title>
        <Span>Please login with your details here</Span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <TextInput label="Fullname" placeholder="Enter your fullname" />
        <TextInput label="Email Address" placeholder="Enter your email" />

        <TextInput
          label="Password Address"
          placeholder="Enter your password"
          password
        />
        <Button text="SignUp" />
      </div>
    </Container>
  );
}

export default SignUp;
