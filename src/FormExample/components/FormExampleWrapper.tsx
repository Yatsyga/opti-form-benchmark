import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface IProps {
  label: string;
}

export const FormExampleWrapper: FC<PropsWithChildren<IProps>> = ({ label, children }) => {
  return <SWrapper>
    <h3>{label}</h3>
    <SChildrenWrapper>
      {children}
    </SChildrenWrapper>
  </SWrapper>
}

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: auto;
`;

const SChildrenWrapper = styled.div`
  min-height: 0;
  flex: auto;
`;