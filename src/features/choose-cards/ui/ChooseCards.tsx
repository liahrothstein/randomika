import { Button } from '@components/index';
import { randomCardArray } from '../model/choose-cards';
import { initExerciseCards } from '@constants/initCards';

export function ChooseCards() {
  console.log(randomCardArray(initExerciseCards));

  return (
    <div>
      <Button text="Выбрать испытание" />
    </div>
  );
}
