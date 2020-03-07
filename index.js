let axios = require("axios");
let inquirer = require("inquirer");
let fs = require("fs");

var inquirerQuestions = [
    {
        name: "username",
        type: "input",
        message: "What is your github username?"
    },
    {
        name: "title",
        type: "input",
        message: "what is your project title?"
    },
    {
        name: "description",
        type: "input",
        message: "describe your project"
    },
    {
        name: "installation",
        type: "input",
        message: "what are the steps to install your project?"
    },
    {
        name: "usage",
        type: "input",
        message: "how can a user impliment your project?"
    },
    {
        name: "license",
        type: "input",
        message: "what is your project's licensing info?"
    },
    {
        name: "contributions",
        type: "input",
        message: "who contributed to your project?"
    },
    {
        name: "testing",
        type: "input",
        message: "how have you tested your project?"
    },
    {
        name: "url",
        type: "input",
        message: "what is your project URL?"
    }
];

function getGitInfo(username) {
    
    axios
        // .get(`https://api.github.com/users/${username}/?per_page=100`)
        // .then((response) => {
        //     console.log(response)
        // })
        gitInfo = {
            "email": "elliotfouts@gmail.com",
            "profilePicUrl" : "google.com"
        }
        return (gitInfo) ;
}


inquirer
.prompt(inquirerQuestions)
.then((answers) => {
    const {username, title, description, installation, usage, license, contributions, testing, url} = answers;
    debugger;
    let gitInfo = getGitInfo(username);
    const {email, profilePicUrl} = gitInfo;
    generateReadMe(username, email, profilePicUrl, title, description, installation, usage, license, contributions, testing, url);
}).catch((err) => {
    console.log(`error: ${err}`)
});


function generateReadMe(username, email, profilePicUrl, title, description, installation, usage, license, contributions, testing, url) {
    var ReadMeContent = `
# ${title} 
[![Travis CI](https://travis-ci.org/tterb/yt2mp3.svg?branch=master)](https://travis-ci.org/tterb/yt2mp3)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)
[![GitHub followers](https://img.shields.io/github/followers/${username}.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/${username}?tab=followers)

View it <a href="${url}">here</a>.

# Table of Contents 
- <a href="#description">Description</a>
- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#licensing">Licensing</a>
- <a href="#contributions">Contributions</a>

# Description 

${description}

# Installation 

${installation}

# Usage 

${usage}

# Licensing 

${license}

# Contributions 

${contributions}

# Testing 

${testing}

# Questions 

elliotfouts@gmail.com
<br>
google.com    
    `

    fs.writeFile("README.md", ReadMeContent, () => {});
}

