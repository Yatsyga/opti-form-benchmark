import { TControl, useInputValue } from "opti-form";
import { ChangeEvent, FC, memo, useCallback } from "react";
import { ControlWrapper } from "../../../components";

interface IProps {
  label: string;
  control: TControl<string>;
}

export const InputText: FC<IProps> = memo(({ label, control }) => {
  const [value, setValue] = useInputValue(control);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => 
    setValue(event.currentTarget.value),
    [setValue]
  );

  return <ControlWrapper error={control.error?.message ?? null} isValidating={control.isValidating} label={label}>
    <input name={control.name} type='text' value={value ?? ''} onChange={onChange} onBlur={control.onTouch} />
  </ControlWrapper>
});
