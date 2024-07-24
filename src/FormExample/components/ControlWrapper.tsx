import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { ErrorIcon } from './ErrorIcon';
import { ValidationIcon } from "./ValidationIcon";

interface IProps {
  label: string;
  error: string | null;
  isValidating: boolean;
}

export const ControlWrapper: FC<PropsWithChildren<IProps>> = ({ label, error, isValidating, children }) => {
  return <div>
    <label>
      <SLabel $color={error ? 'red' : 'black'}>{ label }{isValidating ? <ValidationIcon /> : null}<ErrorIcon error={error}/></SLabel>
      <div>{children}</div>
      {/* {error && <div>Error: {error.message}</div>} */}
    </label>
  </div>
};

const SLabel = styled.div<{ $color: string }>`
  color: ${({$color}) => $color};
`;