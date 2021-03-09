import Chimera from './Themes/Chimera';
import ChimeraDefaults from './Themes/ChimeraDefaults';
import ChimeraPlus from './Themes/ChimeraPlus';
import type { WorkspaceConfiguration } from './Configuration';
import { join } from 'path';
import { writeFileSync } from 'fs';


const templates = {
	'chimera-defaults.json': ChimeraDefaults,
	'chimera.json': Chimera,
	'chimera-plus.json': ChimeraPlus
};


/**
 * Compiles the theme templates for the specified configuration.
 *
 * @param destinationDirectory - The location of the compiled themes
 * @param config - The configuration to for the compiled themes
 * @param console - The console for logging messages
 */
export default function compile (destinationDirectory: string, config: WorkspaceConfiguration, console?: Console): void {

	for (const [fileName, document] of Object.entries(templates)) {
		const file = join(destinationDirectory, fileName);

		writeFileSync(file, JSON.stringify(new document(config), null, '\t'));

		console?.log(`[Generated] ${file}`);
	}

}
