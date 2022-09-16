import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import './GMap.css';

const GMap = ({ location, zoomLevel}) => {
//  const location = {
//     lat: 40,
//     lng: -80
//   }

// bootstrapURLKeys={{key:'AIzaSyBJ2Z1-n9CBkll_U2H7Wy5DIg45cthCtJg'}}

  return (
    <div className='map'>
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
          defaultCenter={location}
          defaultZoom={15}
        >
          <LocationPin
            text={location.address}
            lat={location.lat}
            lng={location.lng}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default GMap;
