const axios = require('axios');
const inquirer = require('inquirer');
const { generalQuestions, customBadgeQuestions, contributorQuestions } = require('./prompts');

async function getUserInput() {
	try {
		const generalInput = await getGeneralInput();
		const customBadges = await getCustomBadges();
		const contributors = await getContributors();

		return { ...generalInput, customBadges, contributors };
	} catch (err) {
		console.log(err);
	}
}

async function getGeneralInput() {
	try {
		const {
			email,
			title,
			description,
			howItWorks,
			installation,
			usage,
			license,
			lintingRules,
			hasTravis,
			testing,
			deployedUrl,
			demonstrationUrl
		} = await inquirer.prompt(generalQuestions);

		let licensingInfo = await getLicensingInfo(license);

		return {
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
			demonstrationUrl
		};
	} catch (err) {
		console.log(err);
	}
}

async function getCustomBadges() {
	let latestBadge;
	let customBadgeArr = [];

	do {
		try {
			latestBadge = await inquirer.prompt(customBadgeQuestions);
			if (latestBadge.wantsCustomBadges) {
				customBadgeArr.push(latestBadge);
			}
		} catch (err) {
			console.log(err);
		}
	} while (latestBadge.wantsCustomBadges);

	return customBadgeArr;
}

async function getContributors() {
	let latestContributor;
	let contributorArr = [];

	do {
		try {
			latestContributor = await inquirer.prompt(contributorQuestions);
			if (latestContributor.wantsContributor) {
				contributorArr.push(latestContributor);
			}
		} catch (err) {
			console.log(err);
		}
	} while (latestContributor.wantsContributor);

	return contributorArr;
}

async function getLicensingInfo(license) {
	let url = 'https://api.github.com/licenses/';
	switch (license) {
		case 'MIT': {
			url += 'mit';
			break;
		}
		case 'GNU APGLv3': {
			url += 'agpl-3.0';
			break;
		}
		case 'GNU GPLv3': {
			url += 'gpl-3.0';
			break;
		}
		case 'GNU LGPLv3': {
			url += 'lgpl-3.0';
			break;
		}
		case 'Mozilla': {
			url += 'mpl-2.0';
			break;
		}
		case 'Apache': {
			url += 'apache-2.0';
			break;
		}
		case 'Creative Commons': {
			url += 'cc0-1.0';
			break;
		}
		default: {
			url += 'unlicense';
			break;
		}
	}
	try {
		const {
			data: { body }
		} = await axios.get(url);
		return body;
	} catch (err) {
		console.log(err);
	}
}

module.exports = getUserInput;
