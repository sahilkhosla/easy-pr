const shell = require('shelljs');
const chalk = require('chalk');
const log = console.log;
const logSymbols = require('log-symbols');
const config = require('../config.json');
const { branch } = config;

module.exports = (prMessage) => {  
  let prCommand = `hub pull-request -b ${branch} -f`; 
  if (!shell.which('hub')) {
    log(chalk.red('Sorry, this script requires hub.'));    
    shell.exit(1);
  }

  if(prMessage) {
    prCommand += ` -F ${prMessage}`;
  }
   
  log(chalk.green(`${logSymbols.info} Executing: ${prCommand}`));
  shell.exec(prCommand);
}