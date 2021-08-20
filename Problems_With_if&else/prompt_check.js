"use strict";
//import prompt from "prompt-sync"; 

const ps = require("prompt-sync");
const prompt = ps();

let name = prompt("Enter ur name : ");
console.log('Hello ${name}');
