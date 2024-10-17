import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const map = () => {
  const position = [-23.55052, -46.633308]; 

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Um exemplo de popup no mapa.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default map;