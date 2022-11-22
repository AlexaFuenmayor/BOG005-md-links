#!/usr/bin/env nodo


const { mdLinks } = require("./index");
const { statsValidate, stats } = require("./functionStats");
const routing = process.argv[2];
const argv = process.argv;

const cli = (routing, argv) => {
  if (routing && argv.includes("--stats") && argv.includes("--validate")) {
    mdLinks(routing, { validate: true }).then((res) => {
      console.log("stats and validate", statsValidate(res)) });
  } else if (routing && argv.includes("--validate")) {
    mdLinks(routing, { validate: true }).then((res) => {
      console.log("Validate is true", res);
    });
  } else if (routing && argv.includes("--stats")) {
    mdLinks(routing, { validate: true }).then((res) => {
      console.log("Stats is true: ", stats(res))
    });
  } else if (routing && argv[3] === undefined) {
    mdLinks(routing, { validate: false }).then((res) => {
      console.log("Validate is false", res)
    });
  } 
  if(argv[3] !== '--stats' && argv[3] !== '--validate' && argv[3] !== undefined){
    console.log('Invalid option, try with : --validate o --stats')
  }else if(argv[4] !== '--stats' && argv[4] !== '--validate' && argv[4] !== undefined){
    console.log('Invalid option, try with: --validate o --stats');
  }
};
cli(routing, argv);
