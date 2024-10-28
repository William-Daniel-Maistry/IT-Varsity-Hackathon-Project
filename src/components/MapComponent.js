// src/components/MapComponent.js

import React, { useEffect } from 'react';

const MapComponent = ({ userLocation }) => {
  useEffect(() => {
    // Initialize the map only once, when the component is mounted
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: userLocation.lat, lng: userLocation.lng },
      zoom: 10,
    });

    // Use AdvancedMarkerElement for a more modern marker
    const { AdvancedMarkerElement } = google.maps.marker;

    const marker = new AdvancedMarkerElement({
      position: { lat: userLocation.lat, lng: userLocation.lng },
      map: map,
      title: 'Your Marker Title',
    });
  }, [userLocation]);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default MapComponent;
