import { CSSProperties, FC } from "react";
import styled from "styled-components";

interface IProps {}

const STYLE: CSSProperties = {
  display: 'inline-block',
  color: '#999999',
  animation: 'rotation 2s infinite linear',
};

export const ValidationIcon: FC<IProps> = () => {
  return <SItem style={STYLE}>I</SItem>
};

const SItem = styled.div`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  display: inline-block;
  padding: 0 0.5em;
  color: #999999;
  animation: rotation 2s infinite linear;
`;