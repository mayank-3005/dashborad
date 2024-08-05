import React, { useState } from 'react';


const ToggleItem = ({ heading, content, iconClass, iconBgClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="item">
      <div className="header-tab" onClick={toggleContent}>
        <span className="heading">
          <i className={`icon ${iconClass} ${iconBgClass} me-2`}></i>
          {heading}
        </span>
        <span className="arrow">
          {isOpen ? '▼' : '▶'}
        </span>
      </div>
      {isOpen && <div className="content">{content}</div>}
    </div>
  );
};

const TabHeading = () => {
  const items = [
    { heading: 'Goals', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil', iconClass: 'fa-solid fa-user', iconBgClass: 'bg-red-500' },
    { heading: 'Popular Dishes', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil', iconClass: 'fa-solid fa-bell', iconBgClass: 'bg-sky-800' },
    { heading: 'Menus', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil', iconClass: 'fa-solid fa-cog', iconBgClass: 'bg-sky-400' },
  ];

  return (
    <div className="container">
      {items.map((item, index) => (
        <ToggleItem
          key={index}
          heading={item.heading}
          content={item.content}
          iconClass={item.iconClass}
          iconBgClass={item.iconBgClass}
        />
      ))}
    </div>
  );
};

export default TabHeading;
