import axios from 'axios';

// This file contains utility functions for API calls
// In a real application, this would connect to a weather API with proper API keys

// PUBLIC_INTERFACE
/**
 * Fetch current weather data for a location
 * @param {string} location - The location to fetch weather for
 * @returns {Promise<Object>} The weather data
 */
export const fetchCurrentWeather = async (location) => {
  // In a real app, this would be a call to a weather API
  // For now, we'll simulate the API call
  
  // Mock implementation - would be replaced with actual API call:
  // Example: return axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
  
  console.log(`API call: Fetching current weather for ${location}`);
  
  // Return mock data for demonstration
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          location: {
            name: location,
            region: 'Sample Region',
            country: 'Sample Country',
            lat: 37.774929,
            lon: -122.419418,
            localtime: new Date().toLocaleTimeString()
          },
          current: {
            temp_c: Math.floor(Math.random() * 30) + 5,
            condition: {
              text: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)],
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png'
            },
            humidity: Math.floor(Math.random() * 100),
            wind_kph: Math.floor(Math.random() * 30),
            feelslike_c: Math.floor(Math.random() * 30) + 5,
            uv: Math.floor(Math.random() * 11)
          }
        }
      });
    }, 500);
  });
};

// PUBLIC_INTERFACE
/**
 * Fetch weather forecast for a location
 * @param {string} location - The location to fetch forecast for
 * @param {number} days - Number of days to forecast
 * @returns {Promise<Object>} The forecast data
 */
export const fetchForecast = async (location, days = 7) => {
  // In a real app, this would be a call to a weather API
  // For now, we'll simulate the API call
  
  // Mock implementation - would be replaced with actual API call:
  // Example: return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}`);
  
  console.log(`API call: Fetching ${days}-day forecast for ${location}`);
  
  // Return mock data for demonstration
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          forecast: {
            forecastday: Array(days).fill().map((_, i) => ({
              date: new Date(Date.now() + 86400000 * (i + 1)).toISOString().split('T')[0],
              day: {
                maxtemp_c: Math.floor(Math.random() * 15) + 20,
                mintemp_c: Math.floor(Math.random() * 15) + 5,
                condition: {
                  text: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)],
                  icon: '//cdn.weatherapi.com/weather/64x64/day/113.png'
                },
                daily_chance_of_rain: Math.floor(Math.random() * 100)
              }
            }))
          }
        }
      });
    }, 500);
  });
};
