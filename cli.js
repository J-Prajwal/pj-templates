#!/usr/bin/env node
// never remove the above line
const template = process.argv[2];
const fse = require("fs-extra");

const destination = process.cwd();
switch (template) {
  case "redux-chakra-vite": {
    try {
      fse.copy(
        `${__dirname}/templates/vite-react-chakra`,
        destination,
        (err) => {
          if (err) throw err;
        }
      );
      console.log("Adding template to destination...\n\n");
    } catch (err) {
      console.log(err);
    }
    console.log(
      "Your template has been successfully added! \n\nFollow the steps below to get started: \n1. npm install \n2. npm start\n\n"
    );
    break;
  }
  case "express-server": {
    try {
      fse.copy(`${__dirname}/templates/express-server`, destination, (err) => {
        if (err) throw err;
      });
      console.log("Adding template to destination...\n\n");
    } catch (err) {
      console.log(err);
    }x
    console.log(
      "Your template has been successfully added! \n\nFollow the steps below to get started: \n1. npm install \n2. npm start\n\n"
    );
    break;
  }
  case "mern-chakra-vite": {
    try {
      fse.copy(
        `${__dirname}/templates/mern-template-with-vite-react-redux`,
        destination,
        (err) => {
          if (err) throw err;
        }
      );
      console.log("Adding template to destination...\n\n");
    } catch (err) {
      console.log(err);
    }
    console.log(
      "Your template has been successfully added! \n\nFollow the steps below to get started: \n1. cd client \n2. npm install \n3. npm run start \n4. cd .. \n5. cd server \n6. npm install\n7. npm run start\n\n"
    );
    break;
  }
  default: {
    console.log("Happy Coding!");
  }
}
