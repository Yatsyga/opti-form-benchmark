import { TControl, useInputValue } from "opti-form";
import { ChangeEvent, FC, memo, useCallback } from "react";
import { ControlWrapper } from "../../../components";

interface IProps {
  label: string;
  control: TControl<number>;
}

export const InputNumber: FC<IProps> = memo(({ label, control }) => {
  const [value, setValue] = useInputValue(control);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newValueStr = event.currentTarget.value;
    if (!newValueStr) {
      setValue(undefined);
      control.setValue(undefined);
      return;
    }

    const newValue = Number(newValueStr);
    setValue(newValue);
    control.setValue(Number.isNaN(newValue) ? undefined : newValue);
  }, [control, setValue]);

  return <ControlWrapper error={control.error?.message ?? null} isValidating={control.isValidating} label={label}>
    <input name={control.name} type='number' value={value?.toString()} onChange={onChange} onBlur={control.onTouch} />
  </ControlWrapper>
});
