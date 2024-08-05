import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = ({ isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-button" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className={`bg-slate-800 sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <i className="fa-solid fa-border-all"></i>
        </div>
        <ul className="Menu-btn">
          <li>
            <Link to="/" className="btn-1 text-white">
              <i className="fa-solid fa-house"></i>
              <span className="text-sm"></span>
            </Link>
          </li>
          <li>
            <Link to="/" className="btn-1 text-white">
              <i className="fa-solid fa-chart-simple"></i>
              <span className="text-sm"></span>
            </Link>
          </li>
          <li>
            <Link to="/" className="btn-1 text-white">
              <i className="fa-solid fa-file"></i>
              <span className="text-sm"></span>
            </Link>
          </li>
          <li>
            <Link to="/" className="btn-1 text-white">
              <i className="fa-solid fa-truck"></i>
              <span className="text-sm"></span>
            </Link>
          </li>
          <li>
            <Link to="/" className="btn-1 text-white">
              <i className="fa-solid fa-user"></i>
              <span className="text-sm"></span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
