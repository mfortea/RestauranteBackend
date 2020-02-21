const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/cocineros",          cors(), controller.readCocineros);     // Read All
router.get    ("/cocineros/:nombre",  cors(), controller.readCocinero);      // Read
router.delete ("/cocineros/:nombre",  cors(), controller.deleteCocinero);    // Delete
router.put    ("/cocineros/:nombre",  cors(), controller.updateCocinero);    // Update
router.post   ("/cocineros",          cors(), controller.createCocinero);    // Create

router.get    ("/platos",         cors(), controller.readPlatos);            // Read All
router.get    ("/platos/:nombre", cors(), controller.readPlato);             // Read
router.delete ("/platos/:nombre", cors(), controller.deletePlato);           // Delete
router.put    ("/platos/:nombre", cors(), controller.updatePlato);           // Update
router.post   ("/platos",         cors(), controller.createPlato);           // Create


module.exports = router;
