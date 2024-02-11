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

// From:https://stackoverflow.com/questions/8233014/how-do-i-search-for-an-object-by-its-objectid-in-the-mongo-console
//let id = "58c85d1b7932a14c7a0a320d";
//let o_id = new ObjectId(id); // id as a string is passed
//db.collection.findOne({ _id: o_id });

const getSpecificContact = async (req, res, next) => {
  try {
    id = req.params._id;
    console.log(id);
    let o_id = new ObjectId(id);
    console.log(o_id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("contacts")
      .findOne({ _id: o_id });
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

const postContacts = async (request, response, next) => {
  const contact = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    favoriteColor: request.body.favoriteColor,
    birthday: request.body.birthday,
  };
  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .insertOne(contact);
  response.setHeader("Content-Type", "application/json");
  response.status(201).json(result);
  //response.redirect("/")
};

const putContact = async (request, response, next) => {
  try {
    id = request.params._id;
    //console.log(id);
    let o_id = new ObjectId(id);
    body = { favoriteColor: request.body.favoriteColor };
    //console.log(body);
    //console.log(body.favoriteColor);
    const result = await mongodb
      .getDb()
      .db()
      .collection("contacts")
      .updateOne(
        { _id: o_id },
        { $set: { favoriteColor: body.favoriteColor } }
      );
    response.setHeader("Content-Type", "application/json");
    response.status(204).json(result);
  } catch (error) {
    console.error(error);
  }
};

const deleteContact = async (request, response, next) => {
  try {
    id = request.params._id;
    o_id = new ObjectId(id);
    body = {
      _id: o_id,
    };
    const result = await mongodb
      .getDb()
      .db()
      .collection("contacts")
      .deleteOne(body);
    response.setHeader("Content-Type", "application/json");
    response.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getContacts,
  getSpecificContact,
  postContacts,
  putContact,
  deleteContact,
};
