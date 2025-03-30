import styles from '../components/Header.module.css';

const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}> 📚 BooksVerse</h1>
        <p className={styles.content}>Onde histórias ganham vida!</p>
        <p className={styles.content}>Explore um universo de livros e descubra novas aventuras. Aqui, cada página é uma porta para um mundo diferente.</p>
      </div>

      <div>
        <h2 className={styles.subtitle}>Categorias</h2>
        <ul className={styles.linkList}>
          <li>
            <a href="/fiction" className={styles.link}>Ficção</a>
          </li>
          <li>
            <a href="/non-fiction" className={styles.link}>Não Ficção</a>
          </li>
          <li>
            <a href="/adventure" className={styles.link}>Aventura</a>
          </li>
          <li>
            <a href="/mystery" className={styles.link}>Mistério</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;