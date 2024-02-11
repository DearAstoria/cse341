const express = require("express");
const contactsController = require("../controllars/contacts");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger-output.json");

// Serve up those docs
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

// GET all contacts/feed/posts
router.get("/", contactsController.getContacts);
// GET 2nd request for specific id
//_id = "65bbf1b4dd27051a5e1ef44f";
router.get("/:_id", contactsController.getSpecificContact);
// Create a POST route to create a new contact.
// All fields are required.
// Return the new contact id in the response body.
router.post("/", contactsController.postContacts);
//Create a PUT route to update a contact. This route should allow for a url similar to this: api-url-path/contacts/id-to-modify. (The id won't be modified, it will just be the means of finding a specific document in the database.) Return an http status code representing the successful completion of the request.
// If a user makes a put request to this address with and :id attached
// Then we will call putContact which will update on contact
router.put("/:_id", contactsController.putContact);
// Create a DELETE route to delete a contact.
// Return an http status code representing the successful completion of the request.
router.delete("/:_id", contactsController.deleteContact);

// localhost:8080/contacts/
module.exports = router;
