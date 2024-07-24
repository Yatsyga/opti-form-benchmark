import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  error: string | null;
}

export const ErrorIcon: FC<IProps> = ({ error }) => {
  if (!error) {
    return null;
  }

  return <SItem title={error}>!</SItem>
}

const SItem = styled.div`
  display: inline-block;
  background-color: red;
  color: white;
  font-weight: bold;
  cursor: pointer;

  border-radius: 100%;
  margin: 0 0.5em;
  padding: 0 0.4em;
`;