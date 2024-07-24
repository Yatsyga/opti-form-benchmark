import { IExampleFormPerson } from './IExampleFormPerson';

export interface IExampleFormValue {
  title: string;
  starter?: IExampleFormPerson;
  finisher?: IExampleFormPerson;
  other: IExampleFormPerson[];
  additionalData: {
    people: IExampleFormPerson[];
    date: Date;
  };
}
