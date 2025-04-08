import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // example icon


const MailInput = () => {
    return (
      <div className="min-w-44   justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-gray-500 transition-colors duration-200 group-focus-within:text-blue"
        />
        <input
          type="email"
          className="outline-none px-2 py-2 bg-transparent"
          placeholder="Enter your email"
        />
      </div>
    );
  };
export default MailInput