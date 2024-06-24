import { useState } from "react";
const Header = ({ handleSideBar }) => {
  const [searchdata, setSearchData] = useState("");

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <div className="header shadow-md">
      <div className="text-cyan-400">
        <h2 className="font-medium">Dashboard</h2>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search here... "
          value={searchdata}
          onChange={handleChange}
        ></input>
        <button type="submit">
        <i class="fa-solid fa-bell text-cyan-400"></i>
        </button>
        <div className="burger" onClick={handleSideBar}>
          <i className="fa-solid fa-bars text-cyan-400"></i>
        </div>
        <div className="user-info">
        <i className="fa-solid fa-user  text-cyan-400"></i>
      </div>
      
      </div>
      
    </div>
  );
};

export default Header;
