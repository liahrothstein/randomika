import type { CardType } from '../../../shared/types/card';

export function randomCardArray(cards: CardType[], minLength = 19): CardType[] {
  let result: CardType[] = [];

  while (result.length < minLength) {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    result = [...result, ...shuffled];
  }

  return result;
}

export function handleSpin(
  isSpinning: boolean,
  initExerciseCards: CardType[],
  initModifierCards: CardType[],
  setExerciseState: (
    value: React.SetStateAction<{
      tape: CardType[];
      targetIdx: number;
    }>,
  ) => void,
  setModifierState: (
    value: React.SetStateAction<{
      tape: CardType[];
      targetIdx: number;
    }>,
  ) => void,
  setIsSpinning: (isSpinning: boolean) => void,
) {
  if (isSpinning) return;

  const newExTape = randomCardArray(initExerciseCards, 40);
  const newModTape = randomCardArray(initModifierCards, 40);

  setExerciseState({ tape: newExTape, targetIdx: 0 });
  setModifierState({ tape: newModTape, targetIdx: 0 });
  setIsSpinning(false);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setIsSpinning(true);
      setExerciseState({ tape: newExTape, targetIdx: newExTape.length - 8 });
      setModifierState({ tape: newModTape, targetIdx: newModTape.length - 8 });
    });
  });

  setTimeout(() => {
    setIsSpinning(false);
  }, 6500);
}

export function getCardHeight(): 110 | 160 | 95 {
  if (typeof window === 'undefined') return 160;
  if (window.innerWidth <= 380) return 95;
  if (window.innerWidth <= 768) return 110;
  return 160;
}
