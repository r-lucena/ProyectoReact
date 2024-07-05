import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicDropdown({ btnName, objectsArray }) {
  return (
    <DropdownButton className='dropdown-button' id="dropdown-basic-button" title={btnName}>
      {objectsArray.map((object, index) => (
        <Dropdown.Item href={object.href} key={index}>{object.item}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default BasicDropdown;