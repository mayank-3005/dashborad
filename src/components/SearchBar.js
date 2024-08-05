import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = () => {
  const [searchData, setSearchData] = useState("");

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <div className="search-container bg-slate-700">
      <div className="search-icon">
        <SearchIcon style={{ color: '#fff' }} />
      </div>
      <input 
        className="search-input bg-slate-700" 
        type="text" 
        placeholder="Search" 
        id="search-input"
        value={searchData}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchContainer;
