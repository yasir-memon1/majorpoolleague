import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // example icon


const Search = () => {
    return (
      <div className="min-w-44 flex justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-gray-500 transition-colors duration-200 group-focus-within:text-blue"
        />
        <input
          type="text"
          className="outline-none px-2 py-2 bg-transparent"
          placeholder="Search players..."
        />
      </div>
    );
  };
export default Search