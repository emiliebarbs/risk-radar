// import React, { useRef, useState, useEffect, useCallback } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import './calcSummary.css';

// const CalcSummary = ({ selectedCity, setShowCalcSummary, categoryClicked }) => {
//   const initalCityStatistics = {
//     "Los Angeles": { "stat": "count" },
//     "Denver": { "stat": "count" },
//     "Tampa": { "stat": "count" }
//   };

//   const categoryStatistics = {
//     "Los Angeles": {
//       "Crime": `Property Crime: (Per Capita)
//                 US: 1,954.4 per 100,000 residents
// 	              LA: per 2,860 per 100,000 residents

//                 Violent Crime: (Per Capita)
//                 US: 380.7 per 100,000 residents
//                 LA: 819 per 100,000 residents
// `,
//       "Cost of Living": {
//         "key1": "value",
//         "key2": "value",
//         "key3": "value"
//       },
//       "Infastructure": {
//         "key1": "value",
//         "key2": "value",
//         "key3": "value"
//       },
//       "Natural Disaster": {
//         "key1": "value",
//         "key2": "value",
//         "key3": "value"
//       },
//     },
//     "Denver": {
//       "Crime": {
//         "key1": "value",
//         "key2": "value",
//         "key3": "value",
//       },
//       "Cost of Living": {
//         "key1": "value",
//         "key2": "value",
//         "key3": "value"
//       },
//       "Infastructure": {
//         "key1": "value",
//         "key2": "value",
//         "key3": "value"
//       },
//       "Natural Disaster": {
//         "key1": "value",
//         "key2": "value",
//         "key3": "value"
//       },
//     },
//     "Tampa": {
//       "Crime": {
//         "key1": "value",
//         "key2": "value",
//         "key3": "value",
//       },
//       "Cost of Living": {
//         "key1": "value",
//         "key2": "value",
//         "key3": "value"
//       },
//       "Infastructure": {
//         "key1": "value",
//         "key2": "value",
//         "key3": "value"
//       },
//       "Natural Disaster": {
//         "key1": "value",
//         "key2": "value",
//         "key3": "value"
//       }
//     }
//   };

//   const cityData = initalCityStatistics[selectedCity];
//   const categoryData = categoryStatistics[selectedCity][categoryClicked];

//   const clickCancel = () => {
//     setShowCalcSummary(false);
//   };

// // --- Draggable Header Setup ---
// const containerRef = useRef(null);
// const [dragging, setDragging] = useState(false);
// const [offset, setOffset] = useState({ x: 0, y: 0 });
// const [position, setPosition] = useState({ x: 0, y: 0 });

// useEffect(() => {
//   const vw = window.innerWidth;
//   setPosition({ x: vw - 600, y: 250 }); // adjust `450` to how far from right you want it
// }, []);


// const handleMouseDown = useCallback((e) => {
//   if (containerRef.current) {
//     const rect = containerRef.current.getBoundingClientRect();
//     setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//     setDragging(true);
//   }
// }, []);

// const handleMouseMove = useCallback((e) => {
//   if (dragging) {
//     const newX = e.clientX - offset.x;
//     const newY = e.clientY - offset.y;
//     setPosition({ x: newX, y: newY });
//   }
// }, [dragging, offset]);

// const handleMouseUp = useCallback(() => {
//   setDragging(false);
// }, []);

// useEffect(() => {
//   if (dragging) {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//   } else {
//     window.removeEventListener("mousemove", handleMouseMove);
//     window.removeEventListener("mouseup", handleMouseUp);
//   }

//   return () => {
//     window.removeEventListener("mousemove", handleMouseMove);
//     window.removeEventListener("mouseup", handleMouseUp);
//   };
// }, [dragging, handleMouseMove, handleMouseUp]);
// // --- End Draggable Header Setup ---

//   const headerText = !categoryClicked
//     ? `Risk Statistics for ${selectedCity}`
//     : `${categoryClicked} Statistics for ${selectedCity}`;

//   // Render the component based on whether categoryClicked exists or not
//   if (!categoryClicked) {
//     return (
//       <div
//         className="calc-summary"
//         ref={containerRef}
//         style={{
//           transform: `translate(${position.x}px, ${position.y}px)`,
//           cursor: dragging ? "grabbing" : "grab"
//         }}
//       >
//         {/* Draggable header */}
//         <div className="draggable-header" onMouseDown={handleMouseDown}>
//           <div className="cancel-container">
//             <h1>{headerText}</h1>
//             <button className="cancel-button" onClick={clickCancel}>
//               <FontAwesomeIcon className="cancel-icon" icon={faXmark} />
//             </button>
//           </div>
//         </div>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum odio ut placerat viverra.
//           Maecenas nec ipsum enim. Sed id iaculis mi. Aliquam nec finibus orci. Etiam pulvinar nulla nisi, 
//           eu imperdiet felis finibus vitae. Donec varius tincidunt odio id porta. Donec luctus pulvinar velit, 
//           ac rutrum tortor tincidunt in.
//         </p>
//         <ul className="calc-list">
//           <li>{cityData.stat}</li>
//           <li>{cityData.stat}</li>
//           <li>something interesting</li>
//         </ul>
//       </div>
//     );
//   } else {
//     return (
//       <div
//         className="calc-summary"
//         ref={containerRef}
//         style={{
//           transform: `translate(${position.x}px, ${position.y}px)`,
//           cursor: dragging ? "grabbing" : "grab"
//         }}
//       >
//         {/* Draggable header */}
//         <div className="draggable-header" onMouseDown={handleMouseDown}>
//           <div className="cancel-container">
//             <h1>{headerText}</h1>
//             <button className="cancel-button" onClick={clickCancel}>
//               <FontAwesomeIcon className="cancel-icon" icon={faXmark} />
//             </button>
//           </div>
//         </div>
//         <p>
//           {categoryData}
//         </p>
//         {/* <ul className="calc-list">
//           <li>{categoryData.propertyCrime}</li>
//           <li>{categoryData.key2}</li>
//           <li>{categoryData.key3}</li> */}
//         {/* </ul> */}
//       </div>
//     );
//   }
// };

// export default CalcSummary;

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './calcSummary.css';

const CalcSummary = ({ selectedCity, setShowCalcSummary, categoryClicked }) => {
  const initialCityStatistics = {
    "Los Angeles": (
      <>
        <p>Los Angeles has an overall risk score of 145.1, placing it in the low to moderate risk category. This score reflects relatively balanced values across all risk categories with particular concern in cost of living and disaster vulnerability.</p>
        <ul>
          <li>High cost of living driven by housing and goods</li>
          <li>Very high disaster risk score (100)</li>
          <li>Moderate crime and infrastructure scores</li>
        </ul>
      </>
    ),
    "Denver": (
      <>
        <p>Denver's overall risk score is 158.6, categorizing it as a moderate risk city. The high crime rate significantly drives this score up, despite lower risks in infrastructure and cost of living.</p>
        <ul>
          <li>Highest crime score among the three cities (280)</li>
          <li>Moderate disaster risk adjusted to 93.6</li>
          <li>Relatively affordable cost of living</li>
        </ul>
      </>
    ),
    "Tampa": (
      <>
        <p>Tampa has a risk score of 137.1, indicating a low overall risk. While its disaster score is high, relatively low scores in cost of living and crime offset the impact.</p>
        <ul>
          <li>Very high disaster vulnerability (99.56)</li>
          <li>Moderate crime and infrastructure scores</li>
          <li>Cost of living close to national average</li>
        </ul>
      </>
    )
  };

  const categoryStatistics = {
    "Los Angeles": {
      "Crime": (
        <>
          <p>Los Angeles has a crime score of 139, indicating a low to average risk relative to the national average.</p>
          <ul>
            <li>Property crime rate: 2,860 per 100,000 residents</li>
            <li>Violent crime rate: 819 per 100,000 residents</li>
            <li>Safety scores: 146 (property), 215 (violent)</li>
            <li>Scores calculated as (City Rate / National Avg) * 100</li>
          </ul>
        </>
      ),
      "Cost of Living": (
        <>
          <p>Los Angeles has a high cost of living risk score of 172, driven by substantial disparities in rent, home prices, and essential goods.</p>
          <ul>
            <li>Rent: $2,340 (28.64% above US avg)</li>
            <li>Housing price: $978,157 (170.76% above US avg)</li>
            <li>Grocery index: 15.77</li>
            <li>Utility costs among the highest of the three cities</li>
          </ul>
        </>
      ),
      "Infastructure": (
        <>
          <p>The infrastructure score for Los Angeles is 23, indicating low risk and high availability of transit and services.</p>
          <ul>
            <li>Transit Score: 77</li>
            <li>Risk score calculated as 100 - Transit Score</li>
          </ul>
        </>
      ),
      "Natural Disaster": (
        <>
          <p>Los Angeles receives a disaster score of 100, placing it in the very high risk category.</p>
          <ul>
            <li>FEMA ranks LA in the highest percentile for disaster risk</li>
            <li>Very high expected annual losses (EAL)</li>
          </ul>
        </>
      )
    },
    "Denver": {
      "Crime": (
        <>
          <p>Denver’s crime score of 280 places it in the high risk category, significantly influencing its overall city risk score.</p>
          <ul>
            <li>Property crime: 5,723 per 100,000 residents</li>
            <li>Violent crime: 1,016 per 100,000 residents</li>
            <li>Safety scores: 293 (property), 267 (violent)</li>
          </ul>
        </>
      ),
      "Cost of Living": (
        <>
          <p>Denver scores 123.3 in cost of living, suggesting relatively low financial strain compared to other major cities.</p>
          <ul>
            <li>Rent: $1,895 (4.18% above US avg)</li>
            <li>Housing price: $558,483 (54.59% above US avg)</li>
            <li>Grocery index: 15.07</li>
            <li>Moderate utility costs</li>
          </ul>
        </>
      ),
      "Infastructure": (
        <>
          <p>Denver has an infrastructure score of 27, classified as low risk. This reflects decent transit coverage and city planning.</p>
          <ul>
            <li>Transit Score: 73</li>
            <li>Calculated risk = 100 - Transit Score</li>
          </ul>
        </>
      ),
      "Natural Disaster": (
        <>
          <p>Denver’s disaster score is 93.6, placing it in the relatively moderate risk category.</p>
          <ul>
            <li>FEMA percentile rating: Relatively Moderate</li>
            <li>Considers social vulnerability and resilience scores</li>
          </ul>
        </>
      )
    },
    "Tampa": {
      "Crime": (
        <>
          <p>Tampa’s crime score of 151 positions it as a moderate risk area, with crime rates slightly below the national average.</p>
          <ul>
            <li>Property crime: 1,689.9 per 100,000 residents</li>
            <li>Violent crime: 504.2 per 100,000 residents</li>
            <li>Safety scores: 87 (property), 132 (violent)</li>
          </ul>
        </>
      ),
      "Cost of Living": (
        <>
          <p>Tampa has a cost of living score of 108, reflecting a low risk classification.</p>
          <ul>
            <li>Rent: $1,995 (9.68% above US avg)</li>
            <li>Housing price: $379,136 (4.95% above US avg)</li>
            <li>Grocery index: 14.71</li>
            <li>Utilities relatively balanced across categories</li>
          </ul>
        </>
      ),
      "Infastructure": (
        <>
          <p>Tampa’s infrastructure score is 50, placing it in a moderate risk tier.</p>
          <ul>
            <li>Transit Score: 50</li>
            <li>Risk score derived as 100 - Transit Score</li>
          </ul>
        </>
      ),
      "Natural Disaster": (
        <>
          <p>Tampa has a disaster risk score of 99.56, which categorizes it under very high risk.</p>
          <ul>
            <li>FEMA percentile ranking: Very High</li>
            <li>One of the most disaster-vulnerable cities by EAL</li>
          </ul>
        </>
      )
    }
  };

  const cityData = initialCityStatistics[selectedCity];
  const categoryData = categoryStatistics[selectedCity][categoryClicked];

  const clickCancel = () => {
    setShowCalcSummary(false);
  };

  const containerRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const vw = window.innerWidth;
    setPosition({ x: vw - 600, y: 250 });
  }, []);

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

  const headerText = !categoryClicked
    ? `Risk Statistics for ${selectedCity}`
    : `${categoryClicked} Statistics for ${selectedCity}`;

  return (
    <div
      className="calc-summary"
      ref={containerRef}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: dragging ? "grabbing" : "grab"
      }}
    >
      <div className="draggable-header" onMouseDown={handleMouseDown}>
        <div className="cancel-container">
          <h1>{headerText}</h1>
          <button className="cancel-button" onClick={clickCancel}>
            <FontAwesomeIcon className="cancel-icon" icon={faXmark} />
          </button>
        </div>
      </div>
      <div className="summary-content">
        {!categoryClicked ? cityData : categoryData}
      </div>
    </div>
  );
};

export default CalcSummary;
