import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = ({ name, values, onChange, isOpen, onToggle, selectedValue }) => {
  return (
    <div className="relative  text-sm">
      <div
        onClick={onToggle} 
        className="cursor-pointer flex justify-between items-center p-2 min-w-44 flex-1 text-gray-900 border-2 border-gray-300 hover:border-gray-400 hover:text-blue duration-300 ease-in-out rounded-lg"
      >
        {selectedValue ? selectedValue : name}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <ul
        className={`absolute w-full h-auto bg-white border-2 border-gray-300 drop-shadow-lg left-0 rounded-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 top-11 pointer-events-auto"
            : "opacity-0 top-16 pointer-events-none"
        }`}
      >
        {values.map((value, index) => (
          <li
            key={index}
            onClick={() => onChange(value)} 
            className="py-2 hover:bg-gray-100 rounded-md px-2 duration-200 ease-in-out hover:text-blue cursor-pointer"
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;