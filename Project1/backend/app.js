const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const mongodb = require("./db/connect");
const professionalRoutes = require("./routes/professional");
const contactsRoutes = require("./routes/contacts");
//const swaggerUi = require("swagger-ui-express");
//const swaggerFile = require("../swagger-output.json");
const port = process.env.PORT || 8080;
const app = express();

//var options = {
//  explorer: true,
//};
// What's the difference between using this method vv
// or using the router to serve up the documentation?
// Anything? Or is it really just as simple as using The
// router instead of the app itself? Router and app are both
// using express, so I think it is just a different implementation,
// and thus not a concern.
// Then there is:
// ```If you want to set up routing based on the swagger document checkout swagger-express-router```
// I think that one is pretty straightforward too^^
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
// Just brings up a search bar vv
//app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile, options));

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/professional", professionalRoutes);

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", contactsRoutes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
