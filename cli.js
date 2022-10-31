#!/usr/bin/env node
// never remove the above line
const template = process.argv[2];
const fse = require("fs-extra");

const destination = process.cwd();
switch (template) {
  case "react-redux-vite": {
    fse.copy(`${__dirname}/templates/vite-react-chakra`, destination, (err) => {
      if (err) throw err;
      console.log("Copied!");
    });
  }
  default: {
    console.log("working");
  }
}
