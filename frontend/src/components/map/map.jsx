import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';
import AddMarkerModal from '../addMarkerModal/AddMarkerModal';

const defaultIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = () => {
  const position = [-23.55052, -46.633308];
  const [markers, setMarkers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        setCurrentLocation(e.latlng);
        setModalIsOpen(true);
      },
    });
    return null;
  };

  const handleAddMarker = (name, description) => {
    if (currentLocation) {
      setMarkers([...markers, { position: currentLocation, name, description }]);
    }
  };

  return (
    <>
      <MapContainer 
        center={position} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
        minZoom={5} 
        maxZoom={18} 
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapEvents />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={defaultIcon}>
            <Popup>
              <strong>{marker.name}</strong><br />
              {marker.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <AddMarkerModal 
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)} 
        onAddMarker={handleAddMarker} 
      />
    </>
  );
};

export default MapComponent;
