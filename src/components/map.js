import './map.css';

const Map = ({ methodsClicked, aboutUsClicked }) => {
  return (
    <div className="map-container">
      <iframe 
        title="LRCOG Broadband Service Area" 
        src="https://wa.lrcog.org/portal/apps/View/index.html?appid=5d424a2e9ec54639a1de4e515a5f175e">
      </iframe>
    </div>
  );
}

export default Map;
