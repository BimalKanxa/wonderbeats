
import React, { useState } from 'react';
import { FaCalendarAlt, FaImage } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SERVER_URL } from '../server';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const AddEventForm = () => {

  const navigate = useNavigate()
  const [location, setLocation] = useState(''); 
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [imgUrl, setImgUrl] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!location.trim()) newErrors.location = 'location is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    if (!date) newErrors.date = 'Date is required';
    if (!imgUrl.trim()) newErrors.imaimgUrl = 'Image URL is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const { logout } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Simple validation check (you can expand this as needed)
    if (validateForm()) {
      try {
       
        await axios.post(`${SERVER_URL}/api/createEvents`, {
          location,
          date,
          imgUrl,
          description
        });
  
        
        toast.success('Event created successfully!');
        
        // Clear form fields or reset state
        setLocation('');
        setDate('');
        setImgUrl('');
        setDescription('');
  
      } catch (error) {
        // Error handling
        console.error('Error creating event:', error);
        toast.error('There was an error creating the event. Please try again.');
      }
    }
  };
  
  const handleLogOut = () => {
      logout()
      navigate("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl space-y-6">
        <div>
        <span className="text-3xl font-bold text-center text-gray-800 mb-6">Add New Event in Gallery</span>
    <button className='bg-blue-500 text-white rounded-md p-1 float-right' onClick={handleLogOut}>Logout</button>
    </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            maxLength={100}
            placeholder="Enter event location"
            className={`p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.location ? 'border-red-500' : ''}`}
            aria-invalid={errors.location ? 'true' : 'false'}
          />
          {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
          <p className="mt-1 text-sm text-gray-500">{location.length}/100 characters</p>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Enter event description"
            className={`p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.description ? 'border-red-500' : ''}`}
            aria-invalid={errors.description ? 'true' : 'false'}
          />
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
          <p className="mt-1 text-sm text-gray-500">{description.length} characters</p>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <div className="p-2 mt-1 relative rounded-md shadow-sm">
            <DatePicker
              id="date"
              selected={date}
              onChange={(date) => setDate(date)}
              className={`block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.date ? 'border-red-500' : ''}`}
              aria-invalid={errors.date ? 'true' : 'false'}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaCalendarAlt className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
          {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="imgUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              <FaImage className="h-5 w-5" aria-hidden="true" />
            </span>
            <input
              type="url" 
              id="imgUrl"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className={`p-2 flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.imgUrl ? 'border-red-500' : ''}`}
              aria-invalid={errors.imgUrl ? 'true' : 'false'}
            />
          </div>
          {errors.imgUrl && <p className="mt-1 text-sm text-red-600">{errors.imgUrl}</p>}
          {imgUrl && (
            <div className="mt-2">
              <img src={imgUrl} alt="Event preview" className="max-w-full h-auto rounded-md" />
            </div>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Create Event
          </button>
        </div>
        <ToastContainer
        position="top-center"
        autoClose={2500}
        theme="dark"
        />
      </form>
    </div>
  );
};

export default AddEventForm;
