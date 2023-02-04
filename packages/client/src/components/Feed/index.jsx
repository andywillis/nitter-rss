import style from './index.module.css';

/**
 * Feed
 *
 * @return {object} JSX
 */
function Feed({ feed }) {
  return (
    <section className={style.feed}>
      {feed.map(item => {
        const authorLink = `https://nitter.lacontrevoie.fr/${item.author}/with_replies`.replace('@', '');
        return (
          <section key={item.id} class={style.tweet}>
            <p className={style.header}>
              <a href={authorLink} rel="noreferrer" target="_blank">
                {item.author}
              </a> - <a href={item.link}>{item.timestamp}</a>
            </p>
            <section className={style.body} dangerouslySetInnerHTML={{ __html: item.body }} />
          </section>
        );
      })}
    </section>
  );
}

export default Feed;
