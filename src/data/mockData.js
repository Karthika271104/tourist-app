export const popularDestinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    description: 'Tropical paradise with beautiful beaches and rich culture.',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800',
    description: 'The city of light, art, and exquisite cuisine.',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    description: 'Historic temples, beautiful gardens, and traditional geisha districts.',
    rating: 4.9
  },
  {
    id: 4,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    description: 'Iconic blue-domed churches and stunning sunset views.',
    rating: 4.7
  }
];

export const getDestinationData = (query) => {
  // Simple mock matching logic or just return default stats
  const defaultMapCenter = [8.5069, 115.2625]; // coordinates for map (bali default)
  
  return {
    name: query || 'Bali, Indonesia',
    travelTime: '14h 30m',
    weather: '28°C / Sunny',
    coordinates: defaultMapCenter,
    hotels: [
      {
        id: 'h1',
        name: 'Azure Villa Resort',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
        rating: 4.9,
        reviews: 320,
        price: 250,
        distance: '1.2 km from center'
      },
      {
        id: 'h2',
        name: 'The Grand Lotus',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
        rating: 4.7,
        reviews: 180,
        price: 180,
        distance: '0.8 km from center'
      },
      {
        id: 'h3',
        name: 'Palm Tree Stay',
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=800',
        rating: 4.5,
        reviews: 145,
        price: 95,
        distance: '2.5 km from center'
      }
    ],
    cafes: [
      {
        id: 'c1',
        name: 'Oasis Coffee House',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
        rating: 4.8,
        reviews: 410,
        type: 'Cafe & Brunch',
        distance: '0.5 km'
      },
      {
        id: 'c2',
        name: 'Sunset Bite',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
        rating: 4.6,
        reviews: 290,
        type: 'Restaurant',
        distance: '1.1 km'
      },
      {
        id: 'c3',
        name: 'The Rustic Mug',
        image: 'https://images.unsplash.com/photo-1501339817344-bca5ce0495f3?auto=format&fit=crop&q=80&w=800',
        rating: 4.7,
        reviews: 156,
        type: 'Coffee Bakery',
        distance: '0.3 km'
      }
    ]
  };
};
