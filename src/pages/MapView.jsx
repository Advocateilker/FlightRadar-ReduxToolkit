import React, { useState } from 'react'
import { 
  MapContainer, 
  TileLayer, 
  Marker, 
  Popup,
  Polyline
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useSelector } from 'react-redux'
import L from "leaflet"

const MapView = ({openModal}) => {

const icon = L.icon({
  iconUrl:"/air-plane.png",
  iconSize:[25,25],
  iconAnchor:[16,16]
})

  const { flights, isError, isLoading, route } = useSelector((store) => store)

//console.log(route)

  return (

    <MapContainer center={[25.108980, 55.362070]} zoom={9} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight,i) => (
        <Marker icon={icon} key={i} position={[flight.lat, flight.lng]}>
          <Popup>
            <div className='popup'>
              <span>Code: {flight.code}</span>
              <button onClick={()=>openModal(flight.id)}>Detail</button>

            </div>
          </Popup>
        </Marker>

      ))}


        <Polyline positions={route}/>

    </MapContainer>

  )
}

export default MapView