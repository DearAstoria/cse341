const awesomeFunction = (req, res, next) => {
  res.json("Sam Anderson");
};

const returnAnotherPerson = (req, res, next) => {
  res.json("Manuel Camargo");
};

module.exports = { awesomeFunction, returnAnotherPerson };
