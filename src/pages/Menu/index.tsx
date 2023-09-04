import { SearchEngine } from 'pages/SearchEngine';
import styles from './menu.module.scss'

import { ReactComponent as Logo } from 'assets/logo.svg'
import { useState } from 'react';

export default function Menu() {
  const [search, setSearch] = useState('')

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa!
        </div>
      </header>
      <section>
        <h3>Cardápio</h3>
        <SearchEngine search={search} setSearch={setSearch} />
      </section>
    </main>  
  );
}
