import React, { useState } from "react";
import "./style.css";
import { userData } from "./data";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedChips, setSelectedChips] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    let data = filterData(userData, query);
    setSuggestions(data);
  };

  function filterData(data, s) {
    return data.filter((entry) => entry.username.includes(s));
  }
  const handleSelectSuggestion = (suggestion) => {
    setSearchQuery("");
    setSuggestions([]);
    setSelectedChips([...selectedChips, suggestion]);
  };

  const handleRemoveChip = (index) => {
    const updatedChips = [...selectedChips];
    updatedChips.splice(index, 1);
    setSelectedChips(updatedChips);
  };

  return (
    <div className="autocomplete-container d-flex flex-row p-2 w-75 mx-auto">
      <h1 className="text-center headingtext">Pick User</h1>
      <div className="chips-container d-flex flex-row">
        {selectedChips.map((chip, index) => (
          <div key={index} className="chip rounded">
            <img src={chip.avatar} alt="avatar" className="smallavatar" />
            {chip.username}
            <button onClick={() => handleRemoveChip(index)}>&times;</button>
          </div>
        ))}

        <input
          type="text"
          id="searchInput"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Add User ..."
          className="flex border-0 "
        />
      </div>
      {suggestions.length > 0 && (
        <div>
          <ul className="suggestion-list">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectSuggestion(suggestion)}
                className="li"
              >
                <img src={suggestion.avatar} alt="avatar" className="avatar" />
                <p className="username">{suggestion.username}</p>
                <p>{suggestion.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
