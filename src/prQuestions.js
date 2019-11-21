module.exports = [
  {
    type: 'input',
    name: 'jira',
    message: 'Please enter the JIRA ticket ID [Example: REG-123]:',
  },
  {
    type: 'list',
    name: 'type',
    message: 'What type of change is it?',
    choices: [
      'build (Changes that affect the build pipeline)', 
      'ci (Changes to our CI configuration files and scripts)', 
      'docs (Documentation only changes)', 
      'feat (A new feature)', 
      'fix (A bug fix)', 
      'perf (A code change that improves performance)', 
      'refactor (A code change that neither fixes a bug nor adds a feature)', 
      'style (Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)', 
      'test (Adding missing tests or correcting existing tests)'
    ],
  },
  {
    type: 'input',
    name: 'message',
    message: `Please provide a short description of the change (shows in GitHub and git log):`,
  },
  {
    type: 'editor',
    name: 'summary',
    message: 'Please provide a detailed summary for this pull request:',     
  },  
  {
    type: 'editor',
    name: 'tests',
    message: 'How can the reviewer test this change?',  
  },
  {
    type: 'confirm',
    name: 'selfReview',
    message: 'I have performed a self-review of my own code',  
  },
  {
    type: 'confirm',
    name: 'commented',
    message: 'I have commented my code, particularly in hard-to-understand areas',  
  },
  {
    type: 'confirm',
    name: 'documentation',
    message: 'I have made corresponding changes to the documentation',  
  },
  {
    type: 'confirm',
    name: 'noWarning',
    message: 'My changes generate no new warnings or console errors',  
  },
  {
    type: 'confirm',
    name: 'unitTest',
    message: 'I have added tests that prove my fix is effective or that my feature works',  
  },
  {
    type: 'confirm',
    name: 'dependencyMerged',
    message: 'Any dependent changes have been merged and published in back-end services',  
  }
];