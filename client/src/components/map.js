import './map.css';

const Map = ({ selectedCity }) => {

  if (selectedCity === "Denver" || selectedCity === "") {

    return (
      <div className="map-container">
        <iframe 
          title="Denver Risk Map" 
          src="https://ucboulder.maps.arcgis.com/apps/mapviewer/index.html?webmap=6f2e7a7bfec64f029de56b58b69aee54">
        </iframe>
      </div>
    )
 
  }
  else if (selectedCity === "Los Angeles") {

    return (
      <div className="map-container">
        <iframe 
          title="Los Angeles Risk Map" 
          src="https://ucboulder.maps.arcgis.com/apps/mapviewer/index.html?webmap=474587d54fe34706978ca4af36e3ae5b">
        </iframe>
      </div>
    )

} 

  else if (selectedCity === "Tampa") {

    return (
      <div className="map-container">
        <iframe 
          title="Tampa Risk Map" 
          src="https://ucboulder.maps.arcgis.com/apps/mapviewer/index.html?webmap=f6ddae034fa94b4a903b5cbb9dabf32f">
        </iframe>
      </div>
    );

  }
  
}

export default Map;
