import React, { useState } from 'react';
import axios from 'axios';

const WifiScanner = () => {
  const [location, setLocation] = useState(null);
let  formattedArr =''
  const handleScanWifi = async () => {
    try {
      const locationResponse = await axios.post('/api/wifi');

      setLocation(locationResponse.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleScanWifi}>Scan Wi-Fi</button>
      
      
      {console.log(formattedArr) }
       
       { location && (
        <div>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      )}
    </div>
  );
};

export default WifiScanner;
