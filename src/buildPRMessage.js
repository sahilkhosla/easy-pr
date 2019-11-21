module.exports = (copy) => {
  const inquirer = require('inquirer');
  const clipboardy = require('clipboardy');
  const log = console.log;
  const chalk = require('chalk');
  const logSymbols = require('log-symbols');
  const write = require('write');
  const questions = require('./prQuestions.js');
  const getPRMessage = require('./getPRMessage');

  return new Promise((resolve, reject) => {
    try {
      inquirer.prompt(questions).then(answers => {
        const pr_message = getPRMessage(answers);
        const tempPrMessagePath = '~/.pr-message.md'
        // write to ~/.pr-message.md file
        write.sync(tempPrMessagePath, pr_message);
  
        // copy to clipboard
        if (copy) {
          clipboardy.writeSync(pr_message);
          log(chalk.green(`${logSymbols.success} PR message copied to clipboard.`))
        }
  
        resolve(tempPrMessagePath);
      });
    } catch (error) {
      log(chalk.green(`${logSymbols.error} An error occurred`, error));
      reject();
    }
  });

}