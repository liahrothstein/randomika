import { ChooseCards } from '@features/index';

import styles from './MainPage.module.scss';

export function MainPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>РАНДОМИКА</h1>
        <h2 className={styles.subtitle}>Не выбирай — крути и делай!</h2>
      </header>

      <section className={styles.content}>
        <ChooseCards />
      </section>
    </main>
  );
}
