import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, CloudSun, Map as MapIcon, Coffee, Home } from 'lucide-react';
import { getDestinationData } from '../data/mockData';
import PlaceCard from './PlaceCard';
import './ResultsPage.css';

export default function ResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q');
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate API call
    const result = getDestinationData(query);
    setData(result);
  }, [query]);

  if (!data) return <div className="loading-state">Loading your destination...</div>;

  return (
    <div className="results-page animate-fade-in">
      {/* Header */}
      <header className="results-header glass">
        <div className="container flex items-center justify-between">
          <button onClick={() => navigate('/')} className="back-btn flex items-center gap-2">
            <ArrowLeft size={20} />
            <span>Back to Search</span>
          </button>
          <h2 className="header-title">Travel Overview</h2>
          <div className="w-24"></div> {/* spacer */}
        </div>
      </header>

      <main className="container results-content">
        {/* Top Section: Overview & Map */}
        <section className="overview-section grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="destination-info lg:col-span-1">
            <h1 className="destination-name">{data.name}</h1>
            
            <div className="stats-grid">
              <div className="stat-card">
                <Clock className="text-primary" size={24} />
                <div className="stat-info">
                  <span className="stat-label">Est. Travel Time</span>
                  <span className="stat-value">{data.travelTime}</span>
                </div>
              </div>
              <div className="stat-card">
                <CloudSun className="text-primary" size={24} />
                <div className="stat-info">
                  <span className="stat-label">Weather</span>
                  <span className="stat-value">{data.weather}</span>
                </div>
              </div>
            </div>
            
            <div className="map-placeholder mt-6">
              {/* Map UI */}
              <div className="map-wrapper rounded-xl overflow-hidden shadow-md" style={{ height: '250px' }}>
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "https://maps.google.com/maps?q=bali&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                  allowFullScreen
                  title="Google Maps"
                ></iframe>
              </div>
              <div className="map-label flex items-center gap-2 mt-3 text-muted">
                <MapIcon size={16} />
                <span>Interactive Map View</span>
              </div>
            </div>
          </div>
          
          <div className="places-preview lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="section-title flex items-center gap-2">
                <Home className="text-primary" /> Stays & Villas
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.hotels.slice(0, 2).map(hotel => (
                <PlaceCard key={hotel.id} place={hotel} />
              ))}
            </div>
            
            <div className="flex justify-between items-center mb-6 mt-8">
              <h3 className="section-title flex items-center gap-2">
                <Coffee className="text-primary" /> Cafes & Dining
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.cafes.slice(0, 2).map(cafe => (
                <PlaceCard key={cafe.id} place={cafe} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
