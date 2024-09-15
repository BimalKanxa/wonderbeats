import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { SERVER_URL } from '../server';
import Footer from './Footer';
import { FaCalendarAlt } from 'react-icons/fa';

const Gallery = () => {
  const [events, setEvents] = useState([]);

  // Fetch events from the API using axios 
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/api/getEvents`) // Adjusted endpoint to match your backend
      .then((response) => {
        setEvents(response.data); // Assuming response.data contains the array of events
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <>
      <div className="text-center mt-8 mb-6 mx-6">
        <h2 className="text-2xl font-semibold">Our Events and Seminars</h2>
      </div>

      {/* Cards start here */}
      <div className="min-h-screen flex flex-wrap gap-4 justify-center">
        {events.length<1?"Our Gallery will be updated soon!!":(events.map((event) => (
          <div
            key={event._id} 
            className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <img
              className="w-full h-48 object-cover"
              src={event.imgUrl}
              alt="event"
            />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 text-gray-800">{event.location}</h2>
              <p className="text-gray-700 text-base">
              {event.description.length > 100
                  ? `${event.description.substring(0, 100)}...`
                  : event.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex items-center">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <span className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</span>
            </div>
          </div>
        )))}
      </div>
      {/* Cards end here */}
      <div className='mt-5 relative '>

      <Footer/>
      </div>
    </>
  );
};

export default Gallery;
