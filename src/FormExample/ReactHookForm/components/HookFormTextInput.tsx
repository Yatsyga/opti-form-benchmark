import { forwardRef } from "react";
import { Control, Controller, FieldPath } from 'react-hook-form';
import { ControlWrapper } from '../../components';
import { IExampleFormValue } from "../../types";

interface IProps {
  label: string;
  name: FieldPath<IExampleFormValue>;
  control: Control<IExampleFormValue>;
  required?: boolean;
}

export const HookFormTextInput = forwardRef<HTMLInputElement, IProps>(({ label, name, required, control }, ref) => {
  return <Controller
    name={name}
    control={control}
    rules={{
      required,
    }}
    render={({ field, fieldState }) => {
      return (
        <ControlWrapper error={fieldState.error?.message ?? null} isValidating={fieldState.isValidating} label={label}>
          <input
            ref={ref}
            name={name}
            onChange={field.onChange}
            value={field.value as string}
          />
        </ControlWrapper>
      );
    }}
  />
});
