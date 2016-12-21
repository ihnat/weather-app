import React from 'react';
import {GoogleMapLoader, GoogleMap } from 'react-google-maps';


export default (props) => {
  debugger;
  return (
    <div>
      <GoogleMapLoader
          containerElement={ <div style={{ height: "100%"}} /> }
          googleMapElement={
            <GoogleMap
              defaultZoom={3}
              defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            />
          }
        />
    </div>
  )
}
