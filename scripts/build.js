'use strict';

const colors = require('../src/colors');
const fs = require('fs');
const path = require('path');


const src = path.join(__dirname, '..', 'src');
const dist = path.join(__dirname, '..', 'dist');

const templates = [
	'chimera-defaults.json',
	'chimera.json',
	'chimera-plus.json'
];


if (!fs.existsSync(dist)) {
	fs.mkdirSync(dist);
}


templates.forEach((template) => {

	const json = fs.readFileSync(path.join(src, template), 'utf8')
		.replace(/%%([A-z0-9]*?)%%/g, (match, color) => colors[color].hex().toString());

	const file = path.join(dist, template);

	fs.writeFileSync(file, json, 'utf-8');

	console.log(`[Generated] ${file}`);

});


// Blank line
console.log();
