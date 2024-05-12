import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";
import styles from "./searchbox.module.css";
function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search: search }));
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
