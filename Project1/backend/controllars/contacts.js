const { request } = require("express");
const mongodb = require("../db/connect");
var ObjectId = require("mongodb").ObjectId;

const getContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection("contacts").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};
// Create a POST route to create a new contact.
// All fields are required.
// Return the new contact id in the response body.
//"firstName": "Manuel",
//"lastName": "Camargo",
//"email": "N/A",
//"favoriteColor": "Azul",
//"birthday": "06/17/49"
const postContacts = async (request, response, next) => {
  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .insertOne(request.body);
  response.setHeader("Content-Type", "application/json");
  response.status(201).json(result);
  //response.redirect("/")
};

const putContact = async (request, response, next) => {
  try {
    id = request.params.id;
    //console.log(id);
    let o_id = new ObjectId(id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("contacts")
      .updateOne({ _id: o_id }, { $set: request.body });
    response.setHeader("Content-Type", "application/json");
    response.status(204).json(result);
  } catch (error) {
    console.error(error);
  }
};

const deleteContact = async (request, response, next) => {
  try {
    //o_id = new ObjectId(request.params.id); too annoying since the ids will change when creating and deleting the same contact.
    const result = await mongodb
      .getDb()
      .db()
      .collection("contacts")
      .deleteOne(request.body);
    response.setHeader("Content-Type", "application/json");
    response.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

// From:https://stackoverflow.com/questions/8233014/how-do-i-search-for-an-object-by-its-objectid-in-the-mongo-console
//let id = "58c85d1b7932a14c7a0a320d";

//let o_id = new ObjectId(id); // id as a string is passed

//db.collection.findOne({ _id: o_id });
//
//

let id = "65bbf1b4dd27051a5e1ef44f";

let o_id = new ObjectId(id); // id as a string is passed

const getSpecificContact = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .find({ _id: o_id });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

module.exports = {
  getContacts,
  getSpecificContact,
  postContacts,
  putContact,
  deleteContact,
};
