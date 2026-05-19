import React from 'react';
import { Star, MapPin } from 'lucide-react';
import './PlaceCard.css';

export default function PlaceCard({ place }) {
  return (
    <div className="place-card hover-scale">
      <div className="place-image-container">
        <img src={place.image} alt={place.name} className="place-image" />
        <div className="place-rating glass">
          <Star size={14} className="star-icon" fill="currentColor" />
          <span>{place.rating}</span>
        </div>
      </div>
      <div className="place-content">
        <h3 className="place-title" title={place.name}>{place.name}</h3>
        <div className="place-details flex items-center text-muted gap-2">
          {place.vicinity ? (
            <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <MapPin size={14} style={{ flexShrink: 0 }} />
              <span className="place-subtitle" title={place.vicinity}>{place.vicinity}</span>
            </div>
          ) : (
            <span className="place-subtitle">{place.type || `${place.reviews} reviews`}</span>
          )}
        </div>
        <div className="place-price" style={{ marginTop: '0.5rem' }}>
          <span className="price-period" style={{ fontSize: '0.8rem', color: '#64748B' }}>
            {place.reviews} reviews • {place.type}
          </span>
        </div>
      </div>
    </div>
  );
}
