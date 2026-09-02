import { Button } from '@components/index';
import { initExerciseCards, initModifierCards } from '@constants/initCards';
import { Card } from '@entities/index';

import plus from '../../../shared/assets/icons/plus.webp';
import { randomCardArray } from '../model/choose-cards';

export function ChooseCards() {
  const randomExerciseCards = randomCardArray(initExerciseCards);
  const randomModifierCards = randomCardArray(initModifierCards);

  return (
    <div>
      {randomExerciseCards.map((card) => (
        <Card key={card.id} image={card.image} />
      ))}
      <img src={plus} alt="" />
      {randomModifierCards.map((card) => (
        <Card key={card.id} image={card.image} />
      ))}
      <Button text="Выбрать испытание" />
    </div>
  );
}
