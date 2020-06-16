const generalQuestions = [
	{
		name: 'email',
		type: 'input',
		message: 'What is your email address?'
	},
	{
		name: 'title',
		type: 'input',
		message: 'What is the name of your project?'
	},
	{
		name: 'description',
		type: 'input',
		message: 'What is your project?'
	},
	{
		name: 'howItWorks',
		type: 'input',
		message: 'How does your project work?'
	},
	{
		name: 'hasInstallation',
		type: 'confirm',
		message: 'Does your project require installation?'
	},
	{
		name: 'installation',
		type: 'input',
		message: 'What are the steps to install your project?',
		when: (answers) => answers.hasInstallation
	},
	{
		name: 'usage',
		type: 'input',
		message: 'How can someone use your project?'
	},
	{
		name: 'license',
		type: 'list',
		message: "What is your project's license?",
		choices: [
			'MIT',
			'GNU APGLv3',
			'GNU GPLv3',
			'GNU LGPLv3',
			'Mozilla',
			'Apache',
			'Creative Commons',
			'The Unlicense'
		]
	},
	{
		name: 'hasLintingRules',
		type: 'confirm',
		message: 'Does your project use linting rules?'
	},
	{
		name: 'lintingRules',
		type: 'input',
		message: 'Which linting rules did you use?',
		when: (answers) => answers.hasLintingRules
	},
	{
		name: 'hasTravis',
		type: 'confirm',
		message: 'Does your project use Travis CI?'
	},
	{
		name: 'hasTested',
		type: 'confirm',
		message: 'Have you tested your project?'
	},
	{
		name: 'testing',
		type: 'input',
		message: 'How have you tested your project?',
		when: (answers) => answers.hasTested
	},
	{
		name: 'deployedUrl',
		type: 'input',
		message: 'what is the URL of your deployed project?'
	},
	{
		name: 'demonstrationUrl',
		type: 'input',
		message: 'what is the URL of your project demonstration?'
	}
];

const customBadgeQuestions = [
	{
		name: 'wantsCustomBadges',
		type: 'confirm',
		message: 'Would you like to create a custom badge?'
	},
	{
		name: 'badgeTitle',
		type: 'input',
		message: 'What is the title of your badge?',
		when: (answers) => answers.wantsCustomBadges
	},
	{
		name: 'badgeValue',
		type: 'input',
		message: 'What is the value of your badge?',
		when: (answers) => answers.wantsCustomBadges
	},
	{
		name: 'badgeColor',
		type: 'input',
		message: 'What color do you want your badge to be?',
		when: (answers) => answers.wantsCustomBadges
	}
];

const contributorQuestions = [
	{
		name: 'wantsContributor',
		type: 'confirm',
		message: 'Would you like to add a contributor?'
	},
	{
		name: 'name',
		type: 'input',
		message: 'What is the name of the contributor?',
		when: (answers) => answers.wantsContributor
	},
	{
		name: 'github',
		type: 'input',
		message: 'What is the github url of that contributor?',
		when: (answers) => answers.wantsContributor
	}
];

module.exports = {
	generalQuestions,
	customBadgeQuestions,
	contributorQuestions
};
