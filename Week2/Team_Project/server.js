var express = require("express");
var app = express();
const routes = require("express").Router();
const port = process.env.PORT || 8080;

//app.use("/", require("./routes"));

// Fill all tags
// id: proffesisionalName, proffessionalImage, nameLink
//     primaryDescription, workDescription1, workDescription2
//     linkTitleText, linkedInLink
//     githubLink, contactText

profile = {
  professionalName: "Jaden Jose Antonio Camargo",
  base64Image: "todo",
  nameLink: {
    firstName: "Jaden Jose Antonio",
    url: "https://github.com/DearAstoria",
  },
  primaryDescription: "Primary Description Test",
  workDescription1: "Test",
  workDescription2: "Test",
  linkTitleText: "Follow me here",
  linkedInLink: {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/jaden-camargo/",
  },
  githubLink: {
    text: "Github",
    link: "https://github.com/DearAstoria",
  },
};

app.use("/professional", routes.get.json(profile));

//res.json("Jaden Jose Antonio Camargo");
//res.json("getbase64imageforthisofmyself");
//res.json("https://www.linkedin.com/in/jaden-camargo/");
//res.json("Test primary description");
//res.json("Test work description1");
//res.json("Test work description2");
//res.json("Test linkTitleText");
//res.json("Follow me here");
//res.json("https://www.linkedin.com/in/jaden-camargo/");
//res.json("https://github.com/DearAstoria");
//res.json("Cam20002@byui.edu");

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});
