import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";

const CustomSelectPopup = ({ options, onSelect, currentLanguage }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const popupRef = useRef(null);

  const handleOptionClick = (option) => {
    onSelect(option.value);
    setShowPopup(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="custom-select-container" ref={popupRef}>
      <div onClick={() => setShowPopup(!showPopup)} className="custom-select">
        {options.find(option => option.value === currentLanguage)?.label || 'English'} <FontAwesomeIcon icon={faChevronRight} />
      </div>
      {showPopup && (
        <div className="popup">
          <div className="search_language">
            <input 
              type="text" 
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="popup-grid">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className="popup-option language_popup"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelectPopup;
