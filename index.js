#!/usr/bin/env node

// read the arguments
// decide the route 
// 1. build PR message
// 2. push a PR
// 3. build and push a PR

const minimist = require('minimist');
const shelljs = require('shelljs');

// import
const buildPRMessage = require('./src/buildPRMessage');
const createGitHubPR = require('./src/createGitHubPR');
const printHelPMessage = require('./src/printHelpMessage');

// execution
const argv = minimist(process.argv.slice(2));
const numFlags = argv && Object.keys(argv).length - 1;

if (numFlags) {
  if (argv['help'] || argv['h']) {
    // help message
    printHelPMessage();
  } else if (argv['message'] || argv['m']) {
    // build PR message
    buildPRMessage(true);
  } else if (argv['create'] || argv['c']) {    
    // build PR message
    if (argv['F']) {
      createGitHubPR(argv['F']);
    } else {
      createGitHubPR();
    }    
  }


} else {

  const buildAndCreate = async () => {
    const prMessage = await buildPRMessage();
    createGitHubPR(prMessage); 
  }
  
  buildAndCreate();
}







