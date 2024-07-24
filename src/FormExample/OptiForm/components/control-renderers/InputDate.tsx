import { TControl, useInputValue } from "opti-form";
import { ChangeEvent, FC, memo, useCallback } from "react";
import { ControlWrapper } from "../../../components";

interface IProps {
  label: string;
  control: TControl<Date>;
}

export const InputDate: FC<IProps> = memo(({ label, control }) => {
  const [value, setValue] = useInputValue(control);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value ? new Date(event.currentTarget.value) : undefined;
    setValue(newValue);
  }, [setValue]);

  return <ControlWrapper error={control.error?.message ?? null} isValidating={control.isValidating} label={label}>
    <input name={control.name} type='date' value={value?.toISOString().split('T')[0] ?? undefined} onChange={onChange} />
  </ControlWrapper>
});
