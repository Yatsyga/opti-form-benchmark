import { FC } from "react";
import styled from "styled-components";
import { FORM_EXAMPLES } from '../consts';
import { IFormExampleData } from "../types";

interface IProps {
  selectedExample: IFormExampleData;
  setSelectedExample: (newData: IFormExampleData) => void;
}

export const ExampleSelector: FC<IProps> = ({ selectedExample, setSelectedExample }) => {
  return <SWrapper>
    {FORM_EXAMPLES.map((example, index) =>
      <STab key={index} $isSelected={example === selectedExample} onClick={() => setSelectedExample(example)}>
        {example.label}
      </STab>)
    }
  </SWrapper>
}

const SWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

const STab = styled.div<{ $isSelected: boolean }>`
  cursor: pointer;
  padding: 0.3em;
  background-color: ${({$isSelected}) => $isSelected ? 'black' : 'white'};
  color: ${({$isSelected}) => $isSelected ? 'white' : 'black'};
  border: 1px solid black;
`;