import { TControl } from "opti-form";
import { CSSProperties, FC, memo, useCallback } from "react";
import { IExampleFormPerson } from "../../../types";
import { InputPerson } from "./InputPerson";

interface IProps {
  label: string;
  control: TControl<IExampleFormPerson[]>
}

export const InputPersonList: FC<IProps> = memo(({ label, control }) => {
  const add = useCallback(() => control.push(undefined), [control]);

  return <div>
    {label && <div>{label}</div>}
    {control.list.map((child) =>
      <div key={child.id} style={CHILD_STYLE}>
        <InputPerson control={child.control} />
        <input type='button' value='delete' onClick={child.delete} />
      </div>
    )}
    <input type='button' value='add' onClick={add} />
  </div>
});

const CHILD_STYLE: CSSProperties = {
  display: 'flex',
};

