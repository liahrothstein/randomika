import { Button } from '@components/index';
import { initExerciseCards, initModifierCards } from '@constants/initCards';
import { Card } from '@entities/index';
import { useState } from 'react';

import lever1 from '../../../shared/assets/icons/lever1.png';
import lever2 from '../../../shared/assets/icons/lever2.png';
import plus from '../../../shared/assets/icons/plus.webp';
import type { CardType } from '../../../shared/types/card';
import { handleSpin, randomCardArray } from '../model/choose-cards';
import styles from './ChooseCards.module.scss';

const CARD_HEIGHT = 160;

export function ChooseCards() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);

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
          {exerciseState.tape.map((card, idx) => {
            const isActive = idx === exerciseState.targetIdx && !isSpinning;

            return (
              <div
                key={`${card.id}-${idx}`}
                className={`${styles.cardWrapper} ${idx === exerciseState.targetIdx && !isSpinning ? styles.active : ''}`}
              >
                <Card
                  image={card.image}
                  isActive={isActive}
                  onClick={() => setSelectedCard(card)}
                />
              </div>
            );
          })}
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
          {modifierState.tape.map((card, idx) => {
            const isActive = idx === modifierState.targetIdx && !isSpinning;

            return (
              <div
                key={`${card.id}-${idx}`}
                className={`${styles.cardWrapper} ${idx === modifierState.targetIdx && !isSpinning ? styles.active : ''}`}
              >
                <Card
                  image={card.image}
                  isActive={isActive}
                  onClick={() => setSelectedCard(card)}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Button
        className={styles.spin}
        image={!isSpinning ? lever1 : lever2}
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

      {selectedCard && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedCard(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedCard(null)}>
              ✕
            </button>
            <img
              src={selectedCard.image}
              alt="Карточка полноэкранно"
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
