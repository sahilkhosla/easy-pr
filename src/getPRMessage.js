const fs = require('fs');
const config = require('../config.json');

// read local package.json file
let rawPackageData = fs.readFileSync('package.json');
let package = JSON.parse(rawPackageData);
let jiraUrl = package && package.epr && package.epr.jira || config && config.jira || '';

// do not add indentation to the following function
module.exports = (answers) => (
`${answers.jira}: ${answers.type.split(' ')[0]} - ${answers.message}\n

# Description
${answers.summary}

## JIRA link
[${jiraUrl}/${answers.jira}](${jiraUrl}/${answers.jira})

## Type of change
${answers.type}

# Test plan
${answers.tests}
    
# Checklist
- [${answers.selfReview ? 'x': ' '}] I have performed a self-review of my own code
- [${answers.commented ? 'x': ' '}] I have commented my code, particularly in hard-to-understand areas
- [${answers.documentation ? 'x': ' '}] I have made corresponding changes to the documentation
- [${answers.noWarning ? 'x': ' '}] My changes generate no new warnings
- [${answers.unitTest ? 'x': ' '}] I have added tests that prove my fix is effective or that my feature works
- [${answers.dependencyMerged ? 'x': ' '}] Any dependent changes have been merged and published in back-end services`
);