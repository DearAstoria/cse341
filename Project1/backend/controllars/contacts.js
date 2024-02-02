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

module.exports = { getContacts, getSpecificContact };
