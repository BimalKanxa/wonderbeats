import Event from "../models.js"

// Create an event
export const postEvents = async (req, res) => {
  try {
    // Extract the required fields from the request body
    const { location, date, imgUrl, description } = req.body;

    // Create a new event instance with the provided data
    const event = new Event({
      location,
      date,
      imgUrl,
      description,
      dateCreated: new Date() // Automatically set dateCreated to the current date
    });

    // Save the event to the database
    await event.save();

    // Send the created event as a response with a 201 status
    res.status(201).json(event);
  } catch (err) {
    // If an error occurs, return a 400 status with the error message
    res.status(400).json({ message: err.message });
  }
};


   // Get all events
export const getEvents = async (req, res) => {
  try {
    // Fetch all events from the database
    const events = await Event.find({}, { 
      location: 1, 
      date: 1, 
      imgUrl: 1, 
      description: 1, 
      dateCreated: 1 
    });

    // Return the events in the response
    res.status(200).json(events);
  } catch (err) {
    // Handle any errors with a 500 status and the error message
    res.status(500).json({ message: err.message });
  }
};
