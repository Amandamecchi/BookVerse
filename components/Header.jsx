import styles from '../components/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}> 📚 BooksVerse</h1>
        <p className={styles.slogan}>Onde histórias ganham vida!</p>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.linkList}>
          <li>
            <a href="/home" className={styles.link}>Início</a>
          </li>
          <li>
            <a href="/livros" className={styles.link}>Livros</a>
          </li>
          <li>
            <a href="/categorias" className={styles.link}>Categorias</a>
          </li>
          <li>
            <a href="/autores" className={styles.link}>Autores</a>
          </li>
          <li>
            <a href="/offers" className={styles.link}>Ofertas</a>
          </li>
        </ul>
      </nav>
      <div className={styles.barraPesquisa}>
        <input type="text" placeholder="peasquisar" className={styles.inputPesquisar} />
        <button className={styles.lupa}>🔍</button>
      </div>

      <div className={styles.icones}>
        <h2 className={styles.icone}>❤️</h2> 
        <h2 className={styles.icone}>🛒</h2> 
        <h2 className={styles.icone}>👤</h2>  
      </div>
    </div>
  );
};

export default Header;