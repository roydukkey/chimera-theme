// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import Colors from './src/Colors';
import type { WorkspaceConfiguration } from './src/Configuration';
import generateThemes from './src/generateThemes';
import { join } from 'path';
import { str } from 'dot-object';
import { contributes, name } from './package.json';
import { existsSync, mkdirSync, writeFileSync } from 'fs';


const dest = join(__dirname, 'dist');


// Ensure destination directory exists.
if (!existsSync(dest)) {
	mkdirSync(dest);
}


// Build colors.json
writeFileSync(join(dest, './colors.json'), JSON.stringify({ default: Colors }, null, 0));


// Read default workspace configuration from package.json
const properties = contributes.configuration.properties;
const config: Partial<WorkspaceConfiguration> = {};

Object.entries(properties).forEach(([key, property]) => {
	str(key.replace(`${name}.`, ''), property.default, config);
});


// Build the theme templates for the default configuration for Web.
generateThemes(config as WorkspaceConfiguration).forEach(([fileName, document]) =>
	writeFileSync(join(dest, fileName), document)
);
