import Chimera from '../src/Themes/Chimera';
import ChimeraDefaults from '../src/themes/ChimeraDefaults';
import ChimeraPlus from '../src/themes/ChimeraPlus';
import { contributes } from '../package.json';
import { join } from 'path';
import { str } from 'dot-object';
import { PropertySchema, WorkspaceConfiguration } from '../src/Configuration';
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

// Read default workspace configuration from package.json
const properties: Record<string, PropertySchema<unknown>> = contributes.configuration.properties;
const config: WorkspaceConfiguration = {};

for (const key in properties) {
	if (Object.prototype.hasOwnProperty.call(properties, key)) {
		str(key, properties[key].default, config);
	}
}


for (const [fileName, document] of Object.entries(templates)) {
	const file = join(dist, fileName);

	writeFileSync(file, JSON.stringify(new document(config['theme-chimera']), null, '\t'));

	console.log(`[Generated] ${file}`);
}


// Blank line
console.log();
