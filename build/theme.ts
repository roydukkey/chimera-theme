import Chimera from '../src/Themes/Chimera';
import ChimeraDefaults from '../src/themes/ChimeraDefaults';
import ChimeraPlus from '../src/themes/ChimeraPlus';
import { join } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';


const dist = join(__dirname, '..', 'dist');

const templates = {
	'chimera-defaults.json': ChimeraDefaults,
	'chimera.json': Chimera,
	'chimera-plus.json': ChimeraPlus
};


if (!existsSync(dist)) {
	mkdirSync(dist);
}


for (const [fileName, document] of Object.entries(templates)) {
	const file = join(dist, fileName);

	writeFileSync(file, JSON.stringify(new document(), null, '\t'));

	console.log(`[Generated] ${file}`);
}


// Blank line
console.log();
