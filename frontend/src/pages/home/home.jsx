import React from 'react';
import Sidebar from 'frontend/src/components/sidebar/sidebar';
import 'leaflet/dist/leaflet.css';
import Map from 'frontend/src/components/map/map';
import useFetchData from 'frontend/src/hooks/useFetchData';
import './home.scss';


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="mapcontainer">
        <Map />
      </div>
    </div>
  );
}

export default Home;
