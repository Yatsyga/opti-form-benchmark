import { FC, useCallback } from "react";
import styled from "styled-components";
import { FpsRenderer } from "../components";
import { useStressTest } from "../hooks";
import { InputDate, InputPerson, InputPersonList, InputText } from "./components";
import { useFormExample } from "./hooks";

interface IProps {}

export const OptiForm: FC<IProps> = () => {
  const { fields, isDirty, isTouched, isValid, isValidating, getValidValue, reset, applyFlatErrorsList } = useFormExample();
  const [stress, fps] = useStressTest((value) => reset({ value }));

  const submit = useCallback(() => {
    getValidValue().then((result) => {
      if (!result) {
        return;
      }

      console.log('submit', result);
    })
  }, [getValidValue]);

  const applyCustomError = useCallback(() => {
    applyFlatErrorsList([
      {path: 'starter.name', error: { message: 'custom name error' } },
      {path: 'starter[surname]', error: { message: 'custom surname error' } },
    ])
  }, [applyFlatErrorsList]);

  return <SWrapper>
    <FpsRenderer fps={fps} />
    <SInputsWrapper>
      <InputText label="Title" control={fields.title} />
      <InputPerson label="Starter" control={fields.starter} />
      <InputPerson label="Finisher" control={fields.finisher} />
      <InputPersonList label="Other" control={fields.other} />
      <div>Additional:</div>
      <InputDate label="Date" control={fields.additionalData.fields.date} />
      <InputPersonList label="People" control={fields.additionalData.fields.people} />
    </SInputsWrapper>
    <SFooter>
      <div>isDirty: {isDirty.toString()}, isTouched: {isTouched.toString()}, isValid: {isValid.toString()}, isValidating: {isValidating.toString()}</div>
      <SButtons>
        <input type="button" value="submit" onClick={submit} disabled={!isDirty || !isValid || isValidating} />
        <input type="button" value="custom error" onClick={applyCustomError} />
        <input type="button" value="stress" onClick={stress} />
      </SButtons>
    </SFooter>
  </SWrapper>;
};

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  min-height: 0;
  height: 100%;
`;

const SInputsWrapper = styled.div`
  flex: auto;
  min-height: 0;
  overflow: auto;
`;

const SFooter = styled.div`
  margin-top: 1em;
  flex: none;
`;

const SButtons = styled.div`
  display: flex;
  gap: 1em;
`;