import { forwardRef } from "react";
import { Control, FieldPath } from "react-hook-form";
import styled from "styled-components";
import { IExampleFormValue } from "../../types";
import { HookFormNumberInput } from "./HookFormNumberInput";
import { HookFormTextInput } from './HookFormTextInput';

interface IProps {
  label?: string;
  name: FieldPath<IExampleFormValue>;
  control: Control<IExampleFormValue>;
}

export const HookFormPersonInput = forwardRef<HTMLInputElement, IProps>(({ label, name, control }, ref) => {
  return <div>
    {label && <div>{label}</div>}
    <SChildInputsWrapper>
      <HookFormNumberInput label="id" name={`${name}.id` as FieldPath<IExampleFormValue>} required control={control} />
      <HookFormTextInput label="Name" name={`${name}.name` as FieldPath<IExampleFormValue>} required control={control} />
      <HookFormTextInput label="Surname" name={`${name}.surname` as FieldPath<IExampleFormValue>} required control={control} />
    </SChildInputsWrapper>
  </div>;
});

const SChildInputsWrapper = styled.div`
  display: flex;
`;
