const swaggerAutogen = require("swagger-autogen")();
//import swaggerAutogen from "swagger-autogen"; For use inside ES Modules

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:8080",
};

const outputFile = "./swagger-output.json";
const routes = ["./backend/routes/contacts.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc).then(() => {
  require("./backend/app"); // Your project's root file
});
