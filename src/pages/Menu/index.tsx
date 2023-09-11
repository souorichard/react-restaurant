import { SearchEngine } from "pages/SearchEngine";
import styles from "./menu.module.scss";

import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import { Filters } from "pages/Filters";

export default function Menu() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <nav className={styles.navigation}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa!</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <SearchEngine
          search={search}
          setSearch={setSearch}
          placeholder="Buscar"
        />
        <div className={styles.menu__filters}>
          <Filters />
        </div>
      </section>
    </main>
  );
}
