import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/results?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form className="search-bar-form glass" onSubmit={handleSearch}>
      <div className="search-input-wrapper">
        <MapPin className="search-icon text-muted" size={24} />
        <input
          type="text"
          className="search-input"
          placeholder="Where do you want to go?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-primary search-btn">
        <Search size={20} />
        <span>Search</span>
      </button>
    </form>
  );
}
