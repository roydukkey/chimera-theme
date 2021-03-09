import compile from '../src/compile';
import { contributes } from '../package.json';
import { join } from 'path';
import { str } from 'dot-object';
import type { PropertySchema, WorkspaceConfiguration } from '../src/Configuration';
import { existsSync, mkdirSync } from 'fs';


const dest = join(__dirname, '..', 'dist');


// Ensure destination directory exists.
if (!existsSync(dest)) {
	mkdirSync(dest);
}


// Read default workspace configuration from package.json
const properties: {
	[key: string]: PropertySchema<unknown>;
} = contributes.configuration.properties;

const config: WorkspaceConfiguration = {} as unknown as WorkspaceConfiguration;

for (const key in properties) {
	if (Object.prototype.hasOwnProperty.call(properties, key)) {
		str(key.replace('theme-chimera.', ''), properties[key].default, config);
	}
}


// Compile the theme templates for the default configuration.
compile(dest, config, console);
