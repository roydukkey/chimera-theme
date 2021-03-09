import Configuration from './Configuration';
import type { ExtensionContext } from 'vscode';
import type { WorkspaceConfiguration } from './Configuration';
import compile from './compile';
import { commands, window, workspace } from 'vscode';


/**
 * This method is called when the extension is activated. It initializes the core functionality of the extension.
 *
 * @param context - A collection of utilities private to an extension.
 */
export function activate (context: ExtensionContext): void {

	// Theme should be built after installation.
	if (Configuration.isFirstRun) {
		buildTheme();
		Configuration.isFirstRun = false;
		requestReload('Please reload Visual Studio Code to complete the installation of the Chimera Theme.');
	}

	// When theme configuration changes, rebuild theme.
	context.subscriptions.push(workspace.onDidChangeConfiguration((event) => {
		if (event.affectsConfiguration('theme-chimera.plus.contrastConstants')) {
			buildTheme();
			requestReload('A setting to the Chimera Theme has changed that requires a reload to take effect.');
		}
	}));

}


/**
 * Rebuilds the theme templates for the updated configuration.
 */
function buildTheme (): void {
	compile(__dirname, workspace.getConfiguration('theme-chimera') as unknown as WorkspaceConfiguration);
}


/**
 * Request the window be reloaded.
 */
async function requestReload (message: string): Promise<boolean> {
	const selection = await window.showInformationMessage(message, 'Reload', 'Ignore');
	const doReload = selection === 'Reload';

	if (doReload) {
		commands.executeCommand('workbench.action.reloadWindow');
	}

	return doReload;
}
