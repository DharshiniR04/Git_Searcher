import React, { useState } from "react";
import '../css/SearchBar.css';

function SearchBar({onSearch}) {
  const [user, setUser] = useState('');

  function handleSearch(){
    onSearch(user);
  }

  return (
    <div>
      <div id="box">
        <label>UserName : </label>
        <input
          type="text"
          value={user}
          placeholder="Enter GitHub username"
          onChange={(e) => setUser(e.target.value)}
        /><br/>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
