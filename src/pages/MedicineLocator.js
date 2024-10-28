import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MedicineLocator.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MedicineLocator = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyResources, setNearbyResources] = useState([]);
  const [error, setError] = useState(null); // Added state for error handling

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setUserLocation(location);
          },
          (error) => {
            console.error('Error fetching location:', error);
            setError('Unable to retrieve your location. Please allow location access.'); // Set error message
          },
          { enableHighAccuracy: true }
        );
      } else {
        setError('Geolocation is not supported by this browser.'); // Fallback for unsupported browsers
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetchNearbyResources(userLocation.lat, userLocation.lng);
    }
  }, [userLocation]);

  const fetchNearbyResources = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=5&q=pharmacy&lat=${lat}&lon=${lng}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const resources = data.map((item, index) => ({
        id: index,
        name: item.display_name,
        location: {
          lat: parseFloat(item.lat),
          lng: parseFloat(item.lon),
        },
      }));
      setNearbyResources(resources);
    } catch (error) {
      console.error('Error fetching nearby resources:', error);
      setError('Unable to fetch nearby resources. Please try again later.'); // Set error message
    }
  };

  const defaultCenter = userLocation || { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco

  return (
    <div className="medicine-locator-container">
      <h1>Medicine and Resource Locator</h1>
      <p>Find pharmacies and health resources near you.</p>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}

      <MapContainer
        center={defaultCenter}
        zoom={14}
        style={{ width: '100%', height: '400px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>You are here</Popup>
          </Marker>
        )}
        {nearbyResources.map((resource) => (
          <Marker key={resource.id} position={resource.location}>
            <Popup>{resource.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MedicineLocator;
