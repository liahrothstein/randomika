import type { Card } from '../../../shared/types/card';

function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

export function randomCardArray(cards: Card[]): Card[] {
  const min = 1;
  const max = cards.length;
  const randomNumbers: number[] = [];

  if (!cards.length) return [];

  while (randomNumbers.length < cards.length) {
    const randomNum = getRandomInt(min, max);
    if (!randomNumbers.includes(randomNum)) {
      randomNumbers.push(randomNum);
    }
  }

  return randomNumbers.map((id) => cards.find((card) => card.id === id)!);
}
