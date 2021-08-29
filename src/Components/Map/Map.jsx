import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';


mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = () => {
    
  const mapContainerRef = useRef(null);
    const[count, setCount]=useState(0)
    const [lng, setLng] = useState(77.2090);
    const [lat, setLat] = useState(28.6139);
    const [zoom, setZoom] = useState(8);
  
  function handleClick() {
    //geting live coordinates  
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })
  
    //on Success
    function successLocation(position) {
      //console.log(position)
      setLng(position.coords.longitude);
      setLat(position.coords.latitude);
      setZoom(12);
      //setupMap([position.coords.longitude, position.coords.latitude])
    }
    //on Failure
      function errorLocation() {
      setLng(77);
      setLat(28);
      setZoom(11);
    }
      setCount(count + 1);
    console.log(count)
  }

    // Initialize map when component mounts
  useEffect(() => {
      console.log('rendered')
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom,
        enableHighAccuracy: true,      
      });

      // Add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.on('move', () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
      });

      // Clean up on unmount
      return () => map.remove();
    },[count]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
        <button className='btn' onClick={handleClick}>here</button>
      
      <div>
        <div className='sidebarStyle'>
          <div>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>
        <div className='map-container' ref={mapContainerRef} />
        
      </div>
      
    </>
    );
  }


export default Map;
