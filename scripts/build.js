'use strict';

const Color = require('color')
	, fs = require('fs')
	, mkdirp = require('mkdirp')
	, path = require('path').posix;

const srcPath = path.join(__dirname, '..', 'src')
	, distPath = path.join(__dirname, '..', 'dist')
	, colors = require(path.join(srcPath, 'colors'));

const templates = [
	'chimera-defaults.json',
	'chimera.json',
	'chimera-plus.json'
];

mkdirp(distPath, (err) => {
	if (err) throw err;

	templates.forEach(template => {
		fs.readFile(path.join(srcPath, template), 'utf8', (err, json) => {
			if (err) throw err;

			json = json.replace(/%%([A-z0-9]*?)%%/g, (match, color) => {
				return colors[color].hex().toString();;
			});

			const dist = path.join(distPath, template);

			fs.writeFile(dist, json, 'utf8', (err) => {
				if (err) throw err;

				console.log(`[Generated] ${dist}`);
			});
		});
	});
});
