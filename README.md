![Licence](https://img.shields.io/badge/license-MIT-blue) [![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)  

# README Generator 
[Demonstration](https://drive.google.com/file/d/1PX-tJ-d2mWPpp94t5ZG4MVgF6wXG-_Fn/view?usp=sharing)

# Description
I knew that projects were basically useless unless you could share them with other people and a github repo without a README is practically invisible. However, that does not change the fact that they are an absolute pain in the a** to write!
As a result of my frusteration, I decided to write a node CLI that would generate a detailed README for me without the need to format markdown, search up relevant badges, track down licensing info, etc,.


# How it Works
I used the inquierer npm package for the CLI prompts and fs to actually write to the output files. I utilized axiso to make an http request to the github licensing API to obtain the license so I could automate its generation.

# Usage 
To use this tool, download the source code and then execute "npm run start" in the main directory


# Contact
email: elliotfouts@gmail.com