import React from 'react';
import './FilterBar.css';

const FilterBar = ({ activeTeam, activeSubTeam, onTeamChange, onSubTeamChange }) => {
  const mainFilters = ['All', 'Mechanical', 'Autonomous'];
  
  const subTeamMap = {
    Mechanical: ['Aerodesign', 'Wing', 'Tail & Stability', 'Structure', 'Propulsion'],
    Autonomous: ['Software', 'Hardware', 'Computer Vision', 'Firmware'],
  };

  const subFilters = activeTeam !== 'All' ? subTeamMap[activeTeam] : [];

  return (
    <section className="filter-section">
      <div className="filter-container">
        
        {/* main filters */}
        <div className="main-filters">
          {mainFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => onTeamChange(filter)}
              className={`filter-btn ${activeTeam === filter ? 'active-main-btn' : 'inactive-btn'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* sub-filters (visible only when a main team is selected) */}
        {subFilters.length > 0 && (
          <div className="sub-filters animate-fade-in">
            {subFilters.map((sub) => {
              const isActive = activeSubTeam === sub;
              const activeClass = activeTeam === 'Autonomous' ? 'active-sub-auto' : 'active-sub-mech';
              const inactiveHoverClass = activeTeam === 'Autonomous' ? 'inactive-sub-auto' : 'inactive-sub-mech';
              
              return (
                <button
                  key={sub}
                  onClick={() => onSubTeamChange(activeSubTeam === sub ? null : sub)}
                  className={`sub-filter-btn ${isActive ? activeClass : inactiveHoverClass}`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterBar;