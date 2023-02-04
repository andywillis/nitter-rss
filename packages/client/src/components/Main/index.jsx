import Feed from '../Feed';

import styles from './index.module.css';

/**
 * Main
 *
 * @return {object} JSX
 */
function Main({ feed }) {
  return (
    <main className={styles.main}>
      <Feed feed={feed} />
    </main>
  );
}

export default Main;
