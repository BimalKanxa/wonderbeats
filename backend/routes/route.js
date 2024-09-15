import express from 'express'
const router = express.Router();

import { getEvents, getImages, postEvents, postImageUrl } from "../controllers/controller.js";


// Create a new event  
router.post('/createEvents', postEvents);

// get all events
router.get('/getEvents', getEvents);

//post collaboration images 
router.post('/images/collab', postImageUrl)
router.get('/images/collab', getImages)

 
export default router;