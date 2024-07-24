import { CSSProperties, FC, memo, useCallback } from "react";
import { Control, FieldPath, useFieldArray } from "react-hook-form";
import { IExampleFormValue } from "../../types";
import { HookFormPersonInput } from "./HookFormPersonInput";

interface IProps {
  label: string;
  name: FieldPath<IExampleFormValue>;
  control: Control<IExampleFormValue>;
}

export const HookFormPersonsListInput: FC<IProps> = memo(({ label, name, control }) => {
  const { fields, append, remove } = useFieldArray({ name: name as any, control });
  const add = useCallback(() => append({}), [append]);

  return <div>
    {label && <div>{label}</div>}
    {fields.map((child, index) =>
      <div key={child.id} style={CHILD_STYLE}>
        <HookFormPersonInput name={`${name}[${index}]` as FieldPath<IExampleFormValue>} control={control} />
        <input type='button' value='delete' onClick={() => remove(index)} />
      </div>
    )}
    <input type='button' value='add' onClick={add} />
  </div>
});

const CHILD_STYLE: CSSProperties = {
  display: 'flex',
};

