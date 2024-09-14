import express from 'express'
const router = express.Router();

import { getEvents, postEvents } from "../controllers/controller.js";


// Create a new event  
router.post('/createEvents', postEvents);

// get all events
router.get('/getEvents', getEvents);

 
export default router;