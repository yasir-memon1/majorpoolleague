import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = ({
  name,
  values,
  onChange,
  isOpen,
  onToggle,
  selectedValue,
  width="min-w-44"
}) => {
  return (
    <div className="relative  text-sm z-50 ">
      <div
        onClick={onToggle}
        className={`cursor-pointer flex justify-between items-center p-2 ${width} flex-1 text-gray-900 border border-gray-300 hover:border-gray-400 hover:text-blue duration-300 ease-in-out rounded-lg`}
      >
        {selectedValue ? selectedValue : name}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <ul
        className={`absolute max-h-96 py-2 overflow-y-auto w-full h-auto bg-white border border-gray-300 drop-shadow-lg left-0 rounded-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 top-11 pointer-events-auto"
            : "opacity-0 top-16 pointer-events-none"
        }`}
      >
        {values.map((value, index) => {
          return (
            <div>
              {value.name && (
                <div className="px-1 py-1 text-xs text-blue opacity-100 font-semibold">
                  {value.name}
                </div>
              )}
              {value.values?.map((value, index) => (
                <li
                  key={index}
                  onClick={() => onChange(value)}
                  className="py-2 hover:bg-gray-100 rounded-md px-3 duration-200 ease-in-out hover:text-blue cursor-pointer"
                >
                  {value}
                </li>
              ))}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
