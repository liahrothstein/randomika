import { Button } from '@components/index';
import { initExerciseCards, initModifierCards } from '@constants/initCards';
import { Card } from '@entities/index';
import { useState } from 'react';

import plus from '../../../shared/assets/icons/plus.webp';
import { handleSpin, randomCardArray } from '../model/choose-cards';
import styles from './ChooseCards.module.scss';

const CARD_HEIGHT = 140;

export function ChooseCards() {
  const [isSpinning, setIsSpinning] = useState(false);

  const [exerciseState, setExerciseState] = useState(() => {
    const tape = randomCardArray(initExerciseCards);
    return { tape, targetIdx: 0 };
  });

  const [modifierState, setModifierState] = useState(() => {
    const tape = randomCardArray(initModifierCards);
    return { tape, targetIdx: 0 };
  });

  return (
    <div className={styles.container}>
      <div className={styles.slotWindow}>
        <div className={styles.activeFrame} />
        <div
          className={`${styles.tape} ${isSpinning ? styles.spinning : ''}`}
          style={{
            transform: `translateY(-${exerciseState.targetIdx * CARD_HEIGHT}px)`,
          }}
        >
          {exerciseState.tape.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className={`${styles.cardWrapper} ${idx === exerciseState.targetIdx && !isSpinning ? styles.active : ''}`}
            >
              <Card image={card.image} />
            </div>
          ))}
        </div>
      </div>

      <img src={plus} alt="+" className={styles.plusIcon} />

      <div className={styles.slotWindow}>
        <div className={styles.activeFrame} />
        <div
          className={`${styles.tape} ${isSpinning ? styles.spinning : ''}`}
          style={{
            transform: `translateY(-${modifierState.targetIdx * CARD_HEIGHT}px)`,
            transitionDelay: isSpinning ? '300ms' : '0ms',
          }}
        >
          {modifierState.tape.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className={`${styles.cardWrapper} ${idx === modifierState.targetIdx && !isSpinning ? styles.active : ''}`}
            >
              <Card image={card.image} />
            </div>
          ))}
        </div>
      </div>

      <Button
        text="Выбрать испытание"
        onClick={() =>
          handleSpin(
            isSpinning,
            initExerciseCards,
            initModifierCards,
            setExerciseState,
            setModifierState,
            setIsSpinning,
          )
        }
        disabled={isSpinning}
      />
    </div>
  );
}
