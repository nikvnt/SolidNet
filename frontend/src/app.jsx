import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import 'leaflet/dist/leaflet.css';
import Map from './components/map/map';
import './app.css';

const app = () => {
  return (
    <div className="app">
      <Sidebar/>
      <div className='mapcontainer'>
        <Map/>
      </div>
    </div>
  );
};

export default app;
