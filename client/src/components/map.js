import './map.css';

const Map = ({ selectedCity }) => {

  if (selectedCity === "Denver" || selectedCity === "") {

    return (
      <div className="map-container">
        <iframe 
          title="Denver Risk Map" 
          src="https://wa.lrcog.org/portal/apps/View/index.html?appid=5d424a2e9ec54639a1de4e515a5f175e">
        </iframe>
      </div>
    )
 
  }
  else if (selectedCity === "Los Angeles") {

    return (
      <div className="map-container">
        <iframe 
          title="Los Angeles Risk Map" 
          src="https://wa.lrcog.org/portal/apps/View/index.html?appid=5d424a2e9ec54639a1de4e515a5f175e">
        </iframe>
      </div>
    )

} 

  else if (selectedCity === "Tampa") {

    return (
      <div className="map-container">
        <iframe 
          title="Tampa Risk Map" 
          src="https://wa.lrcog.org/portal/apps/View/index.html?appid=5d424a2e9ec54639a1de4e515a5f175e">
        </iframe>
      </div>
    );

  }
  
}

export default Map;
