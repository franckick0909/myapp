import { FaBars } from "react-icons/fa";
import PropTypes from 'prop-types';

const ButtonNav = ({ toggle}) => {

  return (
    <>
      <button>
        <FaBars onClick={toggle} />
      </button>
    </>
  );
};
ButtonNav.propTypes = {
    toggle: PropTypes.func.isRequired,
  };

export default ButtonNav;
