'use strict';
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const dotEnvFilePath = path.join(__dirname, '../.env');

if (fs.existsSync(dotEnvFilePath)) {
	console.error('Cannot re-init the project since a file already exists!');
	process.exit(1);
}

let questions = [
	{
		type: 'list',
		name: 'car_make',
		message: 'What make of car?',
		choices: ['Nissan', 'BMW', 'Tesla']
	},
	{
		type: 'input',
		name: 'region',
		message: "API region",
		default: 'USA'
	},
	{
		type: 'input',
		name: 'username',
		message: "API username"
	},
	{
		type: 'input',
		name: 'password',
		message: "API password"
	}
];

inquirer.prompt(questions).then(answers => {
	let linesToWrite = _.map(answers, (value, key) => {
		return `${key.toUpperCase()}=${value}`;
	});
	fs.writeFile(dotEnvFilePath, linesToWrite.join('\n'), 'utf8', (err) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		process.exit(0);
	})
});