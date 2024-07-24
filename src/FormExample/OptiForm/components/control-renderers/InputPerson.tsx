import { TControl } from "opti-form";
import { FC, memo } from "react";
import styled from "styled-components";
import { IExampleFormPerson } from "../../../types";
import { InputNumber } from "./InputNumber";
import { InputText } from "./InputText";

interface IProps {
  label?: string;
  control: TControl<IExampleFormPerson>;
}

export const InputPerson: FC<IProps> = memo(({label, control}) => {
  return <div>
    {label && <div>{label}</div>}
    <SChildInputsWrapper>
      <InputNumber label="id" control={control.fields.id} />
      <InputText label="Name" control={control.fields.name} />
      <InputText label="Surname" control={control.fields.surname} />
    </SChildInputsWrapper>
  </div>
});

const SChildInputsWrapper = styled.div`
  display: flex;
`;