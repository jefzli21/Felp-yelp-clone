import React from 'react'
// import LocationOnIcon from '@mui/icons-material/LocationOn';// import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({text}) => {
  return (
    <div className='pin'>
        <i id="icon" className="fa-solid fa-location-pin"></i>
        {/* <p className='pin-text'>{text}</p> */}
    </div>
  )
}

export default LocationPin