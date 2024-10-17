// src/components/Sidebar.jsx
import React from 'react';
import './sidebar.css';

const sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><a href="#home">Mapa</a></li>
        <li><a href="#services">Tópicos</a></li>
        <li><a href="#about">Dashboard</a></li>
        <li><a href="#contact">Perfil</a></li>
      </ul>
    </div>
  );
};

export default sidebar;
