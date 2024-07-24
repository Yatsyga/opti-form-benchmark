import { IExampleFormPerson, IExampleFormValue } from '../types';

const DEFAULT_LENGTH = 40;

export function createTestValue(): IExampleFormValue {
  const random = new Random();
  return {
    title: random.getRandomText(),
    starter: getRandomPerson(),
    finisher: getRandomPerson(),
    other: Array(random.getRandomNumber(DEFAULT_LENGTH, DEFAULT_LENGTH))
      .fill(null)
      .map(() => getRandomPerson()),
    additionalData: {
      date: new Date(random.getRandomNumber() * 1000000),
      people: Array(random.getRandomNumber(DEFAULT_LENGTH, DEFAULT_LENGTH))
        .fill(null)
        .map(() => getRandomPerson()),
    },
  };
}

function getRandomPerson(): IExampleFormPerson {
  const random = new Random();
  return {
    id: random.getRandomNumber(),
    name: random.getRandomText(),
    surname: random.getRandomText(),
  };
}

const LETTERS = 'qwertyuiopasdfghjklzxcvbnm'.split('');

class Random {
  public getRandomText(): string {
    const length = Math.round(Math.random() * 10);
    return Array(length)
      .fill(null)
      .map(() => {
        const letter = this.getRandomItem(LETTERS);
        return this.getRandomBoolean() ? letter.toUpperCase() : letter;
      })
      .join('');
  }

  public getRandomNumber(min: number = 0, max: number = 100): number {
    return min + Math.round(Math.random() * (max - min));
  }

  public getRandomBoolean(): boolean {
    return Math.random() > 0.5;
  }

  public getRandomItem<T>(arr: T[]): T {
    if (arr.length === 0) {
      throw new Error('bazinga');
    }

    return arr[Math.round(Math.random() * (arr.length - 1))];
  }
}
