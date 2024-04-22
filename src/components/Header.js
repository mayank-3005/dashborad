import { useState } from "react";
const Header = ({ handleSideBar }) => {
  const [searchdata, setSearchData] = useState("");

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <div className="header shadow-md">
      <div>
        <h2>Dashboard</h2>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Lead ID, Application, Company ID, Company Name, Email or Contact Number."
          value={searchdata}
          onChange={handleChange}
        ></input>
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass text-sm"></i>
        </button>
        
      </div>
      <div className="user-info">
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="burger" onClick={handleSideBar}>
          <i className="fa-solid fa-bars text-black"></i>
        </div>
    </div>
  );
};

export default Header;
