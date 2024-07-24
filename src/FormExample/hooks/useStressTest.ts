import { useCallback, useRef, useState } from 'react';
import { IExampleFormValue } from '../types';
import { createTestValue } from '../utils';

export function useStressTest(reset: (newValue: IExampleFormValue) => void) {
  const [fps, setFps] = useState<number | null>(null);

  const resetRef = useRef(reset);
  resetRef.current = reset;

  const stressTest = useCallback(() => {
    let framesCount = 0;
    let lastCheck = performance.now();

    setInterval(() => {
      framesCount += 1;
      resetRef.current(createTestValue());

      if (performance.now() - lastCheck >= 1000) {
        setFps(framesCount);
        framesCount = 0;
        lastCheck = performance.now();
      }
    }, 10);
  }, []);

  return [stressTest, fps] as const;
}