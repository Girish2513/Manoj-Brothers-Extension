import React from 'react';
import './FilterTabs.css';

const FilterTabs = ({ categories, activeCategory, onFilterChange }) => {
  return (
    <div className="filter-tabs-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-tab-btn ${
            activeCategory === category ? 'active' : ''
          }`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;