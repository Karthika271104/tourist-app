import React from 'react';
import SearchBar from './SearchBar';
import { popularDestinations } from '../data/mockData';
import PlaceCard from './PlaceCard';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <span className="pill glass delay-100">Plan your next adventure</span>
          <h1 className="hero-title delay-200">
            Discover the most<br />
            <span className="text-gradient">beautiful places</span>
          </h1>
          <p className="hero-subtitle delay-300">
            Find the best hotels, cafes, and experiences for your next trip.
          </p>
          <div className="delay-300">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="destinations-section container">
        <div className="section-header flex justify-between items-center">
          <div>
            <h2 className="section-title">Popular Destinations</h2>
            <p className="text-muted">Explore our hand-picked locations for your next trip.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {popularDestinations.map((dest) => (
            <PlaceCard key={dest.id} place={dest} />
          ))}
        </div>
      </section>
    </div>
  );
}
