const routes = require("express").Router();

const myControllor = require("../controllors");

routes.get("/", myControllor.awesomeFunction);
routes.get("/awesome", myControllor.returnAnotherPerson);

module.exports = routes;
