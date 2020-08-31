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
	fs.readFile(path.join(src, template), 'utf8', (err, json) => {
		if (err) {
			throw err;
		}

		json = json.replace(/%%([A-z0-9]*?)%%/g, (match, color) => colors[color].hex().toString());

		const file = path.join(dist, template);

		fs.writeFile(file, json, 'utf8', (err) => {
			if (err) {
				throw err;
			}

			console.log(`[Generated] ${file}`);
		});
	});
});
