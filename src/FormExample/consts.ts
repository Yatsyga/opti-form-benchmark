import { OptiForm } from "./OptiForm";
import { ReactHookForm } from "./ReactHookForm";
import { IFormExampleData } from "./types";

export const FORM_EXAMPLES: IFormExampleData[] = [
  { label: 'OptiForm', component: OptiForm },
  { label: 'ReactHookForm', component: ReactHookForm },
];