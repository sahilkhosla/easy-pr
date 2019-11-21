# Easy PR

## Setup

* Install `hub` (might need to update URL for GitHub enterprise)
* Install easy-pr: `npm install -g easy-pr`

## Config 

You can add the following options in the `package.json` of the project where you intend to use this tool:

```
{
  ...
  "easy-pr": {
    "jira": "",
    "branch": ""
  }
}
```

* jira - The base url or your jira project (default: `https://jira.atlassian.net/browse`)  
* branch - The git branch against which you would like to generate the PRs (default: `develop`)

## Usage

### Build a PR message

```
epr -m
```

### Create a PR on GitHub

#### With **pull-request-template.md**

```
epr -c
```

### Build a PR message and create a PR

```
epr
```


