import React, {useState} from 'react';
import './PartsDropdown.css';
// load in files

//let menuExpansionArray[];

function PartsDropdown(props) {

  //Track whether the dropdown is open or not
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //Track whether the chevron should point down or to the side
  const [chevron, setChevron] = useState(">");

  //Update the dropdownOpen and cevron states whenever the dropdown button is clicked
  const updateDropdown = () => {
    //Set the dropdown state
    setDropdownOpen(!dropdownOpen)

    //Set the chevron state based on the dropdown state
    if(dropdownOpen)
    {
      setChevron(">");
    }
    else
    {
      setChevron("v");
    }
  }

  return (
    <div className='PartsDropdown'>
      {/*Button that toggles dropdown*/}
      {/*Name and chevron are organized horizontally*/}
      <button type="button" className="button" onClick={() => updateDropdown()}>
        <h3>{props.name}</h3>
        <h3>{chevron}</h3>
      </button>

      {/*Dropdown only shows its children when it is open*/}
      {dropdownOpen && props.children}
    </div>
  );
}

export default PartsDropdown;