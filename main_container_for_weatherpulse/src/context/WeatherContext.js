import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

// Create the Weather Context
const WeatherContext = createContext();

// PUBLIC_INTERFACE
/**
 * Provider component that wraps the application and provides weather data
 * and related functions to all child components.
 */
export const WeatherProvider = ({ children }) => {
  // State for current weather data
  const [currentWeather, setCurrentWeather] = useState(null);
  // State for forecast data
  const [forecast, setForecast] = useState([]);
  // State for user location
  const [location, setLocation] = useState('');
  // State for loading status
  const [isLoading, setIsLoading] = useState(false);
  // State for any errors
  const [error, setError] = useState(null);
  // State for user's favorite locations
  const [favorites, setFavorites] = useState([]);
  // State for weather insights
  const [insights, setInsights] = useState([]);

  // Use default location if user doesn't provide one
  useEffect(() => {
    if (!location) {
      // Default to San Francisco if no location is set
      fetchWeatherData('San Francisco');
    }
  }, [location, fetchWeatherData]);

  // PUBLIC_INTERFACE
  /**
   * Fetches weather data for the specified location
   * @param {string} searchLocation - The location to fetch weather data for
   */
  const fetchWeatherData = async (searchLocation) => {
    if (!searchLocation) return;
    
    setIsLoading(true);
    setError(null);
    setLocation(searchLocation);

    try {
      // Normally we would use a real API key and endpoint here
      // This is a placeholder implementation that would be replaced with actual API calls
      console.log(`Fetching weather data for ${searchLocation}`);
      
      // Simulate API call with timeout
      setTimeout(() => {
        // Mock current weather data
        const mockCurrentWeather = {
          location: searchLocation,
          temperature: Math.floor(Math.random() * 30) + 5, // Random temp between 5-35°C
          condition: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)],
          humidity: Math.floor(Math.random() * 100),
          windSpeed: Math.floor(Math.random() * 30),
          feelsLike: Math.floor(Math.random() * 30) + 5,
          updatedAt: new Date().toLocaleTimeString()
        };
        
        // Mock forecast data
        const mockForecast = Array(7).fill().map((_, i) => ({
          day: new Date(Date.now() + 86400000 * (i + 1)).toLocaleDateString('en-US', { weekday: 'short' }),
          highTemp: Math.floor(Math.random() * 15) + 20,
          lowTemp: Math.floor(Math.random() * 15) + 5,
          condition: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)],
          precipitation: Math.floor(Math.random() * 100)
        }));
        
        // Mock insights based on the weather
        const mockInsights = [
          `${mockCurrentWeather.condition === 'Sunny' ? 'Perfect day for outdoor activities!' : 'Consider indoor activities today.'}`,
          `${mockCurrentWeather.humidity > 70 ? 'High humidity today. Stay hydrated!' : 'Humidity levels are comfortable.'}`,
          `${mockCurrentWeather.temperature > 28 ? 'Heat advisory: Stay cool and drink plenty of water.' : mockCurrentWeather.temperature < 10 ? 'Cold weather alert: Bundle up!' : 'Temperature is moderate today.'}`
        ];
        
        setCurrentWeather(mockCurrentWeather);
        setForecast(mockForecast);
        setInsights(mockInsights);
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      setIsLoading(false);
    }
  };

  // PUBLIC_INTERFACE
  /**
   * Adds a location to user's favorites
   * @param {string} location - Location to add to favorites
   */
  const addToFavorites = (location) => {
    if (location && !favorites.includes(location)) {
      setFavorites([...favorites, location]);
    }
  };

  // PUBLIC_INTERFACE
  /**
   * Removes a location from user's favorites
   * @param {string} location - Location to remove from favorites
   */
  const removeFromFavorites = (location) => {
    setFavorites(favorites.filter(fav => fav !== location));
  };

  // Value object that will be provided to consumers of this context
  const value = {
    currentWeather,
    forecast,
    location,
    isLoading,
    error,
    favorites,
    insights,
    fetchWeatherData,
    addToFavorites,
    removeFromFavorites
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

// PUBLIC_INTERFACE
/**
 * Custom hook to use the weather context
 * @returns {Object} The weather context value
 */
export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
