import styles from "./filters.module.scss";
import filters from "./filters.json";

type Option = (typeof filters)[0];

type FilterProps = {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export function Filters({ filter, setFilter }: FilterProps) {
  function selectFilter(option: Option) {
    return setFilter(option.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button
          key={option.id}
          onClick={() => selectFilter(option)}
          className={`${styles.filters__button} ${filter === option.id ? styles['filters__button--active'] : ""}`}
        >
          {option.label}
        </button>
      ))
      }
    </div >
  );
}
