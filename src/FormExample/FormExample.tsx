import { FC, useState } from "react";
import styled from "styled-components";
import { ExampleSelector, FormExampleWrapper } from "./components";
import { FORM_EXAMPLES } from "./consts";
import { IFormExampleData } from "./types";

export const FormExample: FC = () => {
  const [selectedExample, setSelectedExample] = useState<IFormExampleData>(FORM_EXAMPLES[0]);

  return <SWrapper>
    <ExampleSelector selectedExample={selectedExample} setSelectedExample={setSelectedExample} />
    <FormExampleWrapper label={selectedExample.label}>
      <selectedExample.component />
    </FormExampleWrapper>
  </SWrapper>
};

const SWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;