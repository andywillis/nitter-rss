import styles from './index.module.css';

/**
 * Feed
 *
 * @return {object} JSX
 */
function Feed({ feed }) {
  return (
    <section className={styles.feed}>
      {feed.map(item => {
        return <p key={item.id}>{item.body}</p>;
      })}
    </section>
  );
}

export default Feed;
