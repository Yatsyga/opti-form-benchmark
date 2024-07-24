import { FC, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FpsRenderer } from "../components";
import { useStressTest } from "../hooks";
import { IExampleFormValue } from "../types";
import { createTestValue } from "../utils";
import { HookFormPersonInput, HookFormPersonsListInput, HookFormTextInput } from "./components";

interface IProps {}

export const ReactHookForm: FC<IProps> = () => {
  const defaultValues = useMemo(() => createTestValue(), []);

  const form = useForm<IExampleFormValue>({
    defaultValues,
    values: defaultValues,
  });
  const { control, reset, setError, formState, handleSubmit } = form;

  const [stress, fps] = useStressTest((value) => reset(value));
  const submit = handleSubmit((result) => console.log('submit', result));

  const applyCustomError = useCallback(() => {
    setError('starter.name', { message: 'custom name error' });
    setError('starter.surname', { message: 'custom surname error' });
  }, [setError]);

  return <SWrapper>
    <FpsRenderer fps={fps} />
    <SInputsWrapper>
      <HookFormTextInput label="Title" name='title' control={control} required />
      <HookFormPersonInput label="Starter" name='starter' control={control} />
      <HookFormPersonInput label="Finisher" name='finisher' control={control} />
      <HookFormPersonsListInput name='other' label="Other" control={control} />
    </SInputsWrapper>
    <SFooter>
      <SButtons>
        <input type="button" value="submit" onClick={submit} disabled={!formState.isDirty || !formState.isValid || formState.isValidating} />
        <input type="button" value="custom error" onClick={applyCustomError} />
        <input type="button" value="stress" onClick={stress} />
      </SButtons>
    </SFooter>
  </SWrapper>
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