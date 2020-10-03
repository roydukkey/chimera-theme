import compile from '../src/compile';
import { contributes } from '../package.json';
import { join } from 'path';
import { str } from 'dot-object';
import { PropertySchema, WorkspaceConfiguration } from '../src/Configuration';
import { existsSync, mkdirSync } from 'fs';


const dest = join(__dirname, '..', 'dist');


// Ensure destination directory exists.
if (!existsSync(dest)) {
	mkdirSync(dest);
}


// Read default workspace configuration from package.json
const properties: Record<string, PropertySchema<unknown>> = contributes.configuration.properties;
const config: WorkspaceConfiguration = {};

for (const key in properties) {
	if (Object.prototype.hasOwnProperty.call(properties, key)) {
		str(key, properties[key].default, config);
	}
}


// Compile the theme templates for the default configuration.
compile(dest, config['theme-chimera'], console);
