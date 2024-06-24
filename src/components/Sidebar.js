import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Sidebar = ({ isActive }) => {
  return (
    <div className={`sidebar ${isActive ? 'sidebar-active shadow-lg bg-cyan-400' : 'sidebar-hidden shadow-lg bg-cyan-400'}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="Menu-btn">
        <li>
          <Link to="/" className="btn-1 text-white">
            <i className="fa-solid fa-chart-simple"></i>
            <span className="text-sm">DashBoard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="btn-1 text-white">
            <i className="fa-solid fa-table-cells-large"></i>
            <span className="text-sm">Sales & CRM</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="btn-1 text-white">
            <i className="fa-solid fa-truck"></i>
            <span className="text-sm">Freight Forward Mgmt</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="btn-1 text-white">
            <i className="fa-solid fa-truck"></i>
            <span className="text-sm">Freight Forward Mgmt</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="btn-1 text-white">
            <i className="fa-solid fa-truck"></i>
            <span className="text-sm">Freight Forward Mgmt</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="btn-1 text-white">
            <i className="fa-solid fa-truck"></i>
            <span className="text-sm">Freight Forward Mgmt</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="btn-1 text-white">
            <i className="fa-solid fa-truck"></i>
            <span className="text-sm">Freight Forward Mgmt</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="btn-1 text-white">
            <i className="fa-solid fa-truck"></i>
            <span className="text-sm">Freight Forward Mgmt</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="btn-1 text-white">
            <i className="fa-solid fa-truck"></i>
            <span className="text-sm">Freight Forward Mgmt</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
