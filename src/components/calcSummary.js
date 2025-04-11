import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './calcSummary.css';

const CalcSummary = ({ selectedCity, setShowCalcSummary, categoryClicked }) => {
  const initalCityStatistics = {
    "Los Angeles": { "stat": "count" },
    "Denver": { "stat": "count" },
    "Tampa": { "stat": "count" }
  };

  const categoryStatistics = {
    "Los Angeles": {
      "Crime": {
        "key1": "value",
        "key2": "value",
        "key3": "value",
      },
      "Cost of Living": {
        "key1": "value",
        "key2": "value",
        "key3": "value"
      },
      "Infastructure": {
        "key1": "value",
        "key2": "value",
        "key3": "value"
      },
      "Natural Disaster": {
        "key1": "value",
        "key2": "value",
        "key3": "value"
      },
    },
    "Denver": {
      "Crime": {
        "key1": "value",
        "key2": "value",
        "key3": "value",
      },
      "Cost of Living": {
        "key1": "value",
        "key2": "value",
        "key3": "value"
      },
      "Infastructure": {
        "key1": "value",
        "key2": "value",
        "key3": "value"
      },
      "Natural Disaster": {
        "key1": "value",
        "key2": "value",
        "key3": "value"
      },
    },
    "Tampa": {
      "Crime": {
        "key1": "value",
        "key2": "value",
        "key3": "value",
      },
      "Cost of Living": {
        "key1": "value",
        "key2": "value",
        "key3": "value"
      },
      "Infastructure": {
        "key1": "value",
        "key2": "value",
        "key3": "value"
      },
      "Natural Disaster": {
        "key1": "value",
        "key2": "value",
        "key3": "value"
      }
    }
  };

  const cityData = initalCityStatistics[selectedCity];
  const categoryData = categoryStatistics[selectedCity][categoryClicked];

  const clickCancel = () => {
    setShowCalcSummary(false);
  };

// --- Draggable Header Setup ---
const containerRef = useRef(null);
const [dragging, setDragging] = useState(false);
const [offset, setOffset] = useState({ x: 0, y: 0 });
const [position, setPosition] = useState(() => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return { x: vw / 2 - 200 + 400, y: vh / 2 - 200 + 75}; // adjust based on modal size
});

const handleMouseDown = useCallback((e) => {
  if (containerRef.current) {
    const rect = containerRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setDragging(true);
  }
}, []);

const handleMouseMove = useCallback((e) => {
  if (dragging) {
    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;
    setPosition({ x: newX, y: newY });
  }
}, [dragging, offset]);

const handleMouseUp = useCallback(() => {
  setDragging(false);
}, []);

useEffect(() => {
  if (dragging) {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  } else {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };
}, [dragging, handleMouseMove, handleMouseUp]);
// --- End Draggable Header Setup ---

  const headerText = !categoryClicked
    ? `Risk Statistics for ${selectedCity}`
    : `${categoryClicked} Statistics for ${selectedCity}`;

  // Render the component based on whether categoryClicked exists or not
  if (!categoryClicked) {
    return (
      <div
        className="calc-summary"
        ref={containerRef}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          cursor: dragging ? "grabbing" : "grab"
        }}
      >
        {/* Draggable header */}
        <div className="draggable-header" onMouseDown={handleMouseDown}>
          <div className="cancel-container">
            <h1>{headerText}</h1>
            <button className="cancel-button" onClick={clickCancel}>
              <FontAwesomeIcon className="cancel-icon" icon={faXmark} />
            </button>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum odio ut placerat viverra.
          Maecenas nec ipsum enim. Sed id iaculis mi. Aliquam nec finibus orci. Etiam pulvinar nulla nisi, 
          eu imperdiet felis finibus vitae. Donec varius tincidunt odio id porta. Donec luctus pulvinar velit, 
          ac rutrum tortor tincidunt in.
        </p>
        <ul className="calc-list">
          <li>{cityData.stat}</li>
          <li>{cityData.stat}</li>
          <li>something interesting</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div
        className="calc-summary"
        ref={containerRef}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          cursor: dragging ? "grabbing" : "grab"
        }}
      >
        {/* Draggable header */}
        <div className="draggable-header" onMouseDown={handleMouseDown}>
          <div className="cancel-container">
            <h1>{headerText}</h1>
            <button className="cancel-button" onClick={clickCancel}>
              <FontAwesomeIcon className="cancel-icon" icon={faXmark} />
            </button>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum odio ut placerat viverra.
          Maecenas nec ipsum enim. Sed id iaculis mi. Aliquam nec finibus orci. Etiam pulvinar nulla nisi, 
          eu imperdiet felis finibus vitae. Donec varius tincidunt odio id porta. Donec luctus pulvinar velit, 
          ac rutrum tortor tincidunt in.
        </p>
        <ul className="calc-list">
          <li>{categoryData.key1}</li>
          <li>{categoryData.key2}</li>
          <li>{categoryData.key3}</li>
        </ul>
      </div>
    );
  }
};

export default CalcSummary;
