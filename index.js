const fs = require("fs");
const getUserInput = require('./promptMethods');

generateReadMe();


async function generateReadMe() {
    let inputResults = await getUserInput();

    const {
        email,
        title,
        description,
        howItWorks,
        installation,
        usage,
        license,
        licensingInfo,
        lintingRules,
        hasTravis,
        testing,
        deployedUrl,
        demonstrationUrl, 
        customBadges,
        contributors
    } = inputResults;

    var ReadMeContent = `
![Licence](https://img.shields.io/badge/license-${license}-blue) ![Website](https://img.shields.io/badge/website-up-brightgreen) [![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) ${lintingRules ? '![Lint Rules](https://img.shields.io/badge/codestyle-${lintingRules}-brightgreen)' : ''} ${hasTravis ? '![Build Status](https://img.shields.io/badge/build-passing-brightgreen)': ''}

${customBadges.length 
? customBadges.forEach(badge => `![Custom Badge](https://img.shields.io/badge/badgename-badgevalue-orange)`)
: ''}

# ${title} 
[Deployed](${deployedUrl}) | [Demonstration](${demonstrationUrl})

# Description
${description}

${installation ? `# Installation\n${installation}` : ''}

# How it Works
${howItWorks}

# Usage 
${usage}

${testing ? `# Testing\n${testing}` : ''}

${contributors.length 
? '#Contributors \n' + contributors.forEach(contributor => (`${contributor.name}: ${contributor.github}`))
: ''}

# Contact
email: ${email}`

    fs.writeFile("README.md", ReadMeContent, () => {});
    fs.writeFile("LICENSE.md", licensingInfo, () => {});

    console.log("\nYour readme and license have been generated! Don't forget to fill out your name and info in the license file!")
}

