import { FaSearch } from "react-icons/fa";



function Search({ onSearch }) {
    return (
        <form className="searchBar">
            <FaSearch />
            <input type="search" name="search" id="search"
                aria-label="tu búsqueda"
                placeholder="   ¿Cuál tarea deseas buscar "
                onChange={(e) => onSearch(e.target.value)}
            />

        </form>
    )
};

export default Search;