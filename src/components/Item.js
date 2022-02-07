import React from 'react';
import mapPin from '../images/map-pin.svg';

export default function Item(props) {
  return (
    <div className="item">
      <img 
        src={props.imageUrl}
        className="item--image"
        alt={props.title}
      />
      <div className="text-block">
        <div className="loc-group">
          <img src={mapPin} className="map-pin" alt="map pin"></img>
          <span className="location">{props.location}</span>
          <a href={props.googleMapsUrl} className="maps-link">
            View on Google Maps
          </a>
        </div>
        <h2 className="item--title">{props.title}</h2>
        <div className="date-group">
          {`${props.startDate} - ${props.endDate}`}
        </div>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};