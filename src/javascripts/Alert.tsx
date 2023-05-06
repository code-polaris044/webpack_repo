import * as React from "react";
import styled from "styled-components";

const AlertContainer = styled.div`
  background-color: brown;
  padding: 1em;
  color: skyblue;
`;

const Alert: React.FC<{ message: string }> = ({ message }) => {
  return <AlertContainer>{message}</AlertContainer>;
};

export default Alert;
