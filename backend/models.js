// models.js
import mongoose from "mongoose";

// Define the event schema
const eventSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true, // Location is required
  },
  date: {
    type: Date,
    required: true, // Event date is required
  },
  dateCreated: {
    type: Date,
    default: Date.now, // Automatically set the date when the event is created
  },
  imgUrl: {
    type: String,
    required: true, // Image URL is required
  },
  description: {
    type: String,
    required: true, // Description is required
  }
});

// Create the Event model
const Event = mongoose.model('Event', eventSchema);

// Export the model
export default Event;

