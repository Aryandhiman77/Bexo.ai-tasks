import React from "react";
import "./style.css";

const Filters = ({ filters, setFilter = () => {}, selected }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <div className="filters">
        {filters?.map((filter) => (
          <React.Fragment key={filter}>
            <button
              id={filter}
              type="radio"
              name="filter"
              onClick={handleFilterChange}
              value={filter}
              className={`filter ${filter === selected && "filter-selected"}`}
            >
              {filter}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Filters;
