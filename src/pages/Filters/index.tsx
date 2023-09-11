import styles from "./filters.module.scss";
import filters from "./filters.json";

type Options = (typeof filters)[0];

export function Filters() {
  function selectFilter() {
    console.log("filtrou");
  }

  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button
          key={option.id}
          onClick={selectFilter}
          className={styles.filters__button}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
