import {
  FormValidationType,
  TControlDataFields,
  TControlError,
  createArray,
  createBasic,
  createObject,
  useOptiForm,
} from 'opti-form';
import { IExampleFormValue } from '../../types';
import { createTestValue } from '../../utils';

const noValueError: TControlError = {
  message: 'This field is very required',
};

const forbiddenSurnameError: TControlError = {
  message: 'This surname is forbidden',
};

const FORM_CONTROLS_DATA: TControlDataFields<IExampleFormValue, Set<string>> = {
  title: createBasic({ noValueError }),
  starter: createObject({
    fieldsData: {
      id: createBasic({ noValueError }),
      name: createBasic({ noValueError }),
      surname: createBasic({
        noValueError,
        usesContext: true,
        validate: (val, context) => (context.has(val!) ? forbiddenSurnameError : null),
      }),
    },
  }),
  finisher: createObject({
    fieldsData: {
      id: createBasic({ noValueError }),
      name: createBasic({ noValueError }),
      surname: createBasic({
        noValueError,
        usesContext: true,
        validate: (val, context) => (context.has(val!) ? forbiddenSurnameError : null),
      }),
    },
  }),
  other: createArray<IExampleFormValue['other'], Set<string>, Set<string> | null>(
    {
      childData: createObject({
        fieldsData: {
          id: createBasic({ noValueError }),
          name: createBasic({ noValueError }),
          surname: createBasic({
            noValueError,
            usesContext: true,
            validate: (val, context) => {
              if (context === null) {
                return null;
              }

              const result: TControlError | null = context.has(val!) ? forbiddenSurnameError : null;

              return new Promise((resolve) => {
                console.log('called async validation callback');
                setTimeout(() => resolve(result), 1000 ?? 0);
              });
            },
            validationDebounceMs: 500,
          }),
        },
        noValueError,
      }),
      noValueError,
    },
    {
      createDescendantsContext: (_val, context) => (context.size > 5 ? context : null),
      usesContext: true,
    }
  ),
  additionalData: createObject({
    fieldsData: {
      people: createArray({
        childData: createObject({
          fieldsData: {
            id: createBasic({ noValueError }),
            name: createBasic({ noValueError }),
            surname: createBasic({
              noValueError,
              usesContext: true,
              validate: (val, context) => (context.has(val!) ? forbiddenSurnameError : null),
            }),
          },
          noValueError,
        }),
        noValueError,
      }),
      date: createBasic({ noValueError }),
    },
    noValueError,
  }),
};

const exampleValue = createTestValue();

const forbiddenSurnames = new Set(['bazinga1', 'bazinga2', 'bazinga3', 'bazinga4', 'bazinga5', 'bazinga6']);

export function useFormExample() {
  return useOptiForm({
    getFieldsData: () => FORM_CONTROLS_DATA,
    context: forbiddenSurnames,
    value: exampleValue,
    defaultValue: exampleValue,
    validationType: FormValidationType.onlyTouched,
  });
}
