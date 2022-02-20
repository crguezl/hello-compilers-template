#!/usr/bin/env node
const deb = require('../src/deb.js');
const escodegen = require('escodegen');
const {program} = require('commander');
const fs = require('fs');
const p = require("../src/maxmin.js").parser;
const { version } = require('../package.json');

program
    .version(version)
    .argument("<expression>", 'Expression to translate')
    .option('-a --ast <file>', 'file to output the AST in JSON format')
    .option('-j --js <file>', 'file to output the resulting javascript')
    .action((expression) => {
       transpile(expression);
    });

program.parse();

function transpile(expression) {
 /* Feel free to modify it at your convenience */
}
