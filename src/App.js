import React, { useState, useEffect } from 'react';
import './App.css'

const FetchDataComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const requestOptions = {
        method: 'GET',
        headers: {
          clientId: '2zWGEfImMMIDt84OYFBHimhXb9Pdph6Fg5KYZP3Z',
          clientSecret: "cx3dWT42sjXCrOlG0UYA8HPBHthhEvRIcsoeIpQrVHN1TQNXllltBSv9BW9XaioEFaECB" +
    "crSdvEEW7o0hOWs1tTjYeacq1hslm5UfPVkxPmkfk5p44Ec8i0MWyozcTUm",
          Authorization: 'Bearer sGVqN73nxeYVcQnPrBa25wrw1yqaOp',
        },
      };

      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://portal.getjoan.com/api/v1.0/events/', requestOptions);
        const result = await response.json();
        setData(result);
        console.log(JSON.stringify(result[1].events[1].end))
      } catch (error) {
        console.log('error', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      
      <iframe src="https://unicorn.studio/embed/r9dJwY9snMavCZyrbPKh" onload="this.width=screen.width;this.height=screen.height;"></iframe>   </div>
  );
};

export default FetchDataComponent;
