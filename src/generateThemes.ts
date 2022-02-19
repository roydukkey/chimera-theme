import Chimera from './Themes/Chimera';
import ChimeraPlus from './Themes/ChimeraPlus';
import type Schema from './Themes/Schema';
import type { WorkspaceConfiguration } from './Configuration';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const templates: Array<[string, new(config: WorkspaceConfiguration) => Schema]> = [
	['chimera.json', Chimera],
	['chimera-plus.json', ChimeraPlus]
];


/**
 * Generate the themes from templates for the specified configuration.
 *
 * @param config - The configuration to for the compiled themes
 * @returns A list of file names and their contents.
 */
export default function generateThemes (config: WorkspaceConfiguration): Array<[string, string]> {
	return templates.map(([fileName, document]) => [
		fileName,
		JSON.stringify(new document(config), null, '\t')
	]);
}
