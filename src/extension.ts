import compile from './compile';
import { ExtensionContext, window, workspace } from 'vscode';

/**
 * This method is called when the extension is activated. It initializes the core functionality of the extension.
 *
 * @param context - A collection of utilities private to an extension.
 */
export function activate (context: ExtensionContext): void {

	// When theme configuration changes, rebuild theme.
	context.subscriptions.push(workspace.onDidChangeConfiguration((event) => {
		if (event.affectsConfiguration('theme-chimera.plus.contrastConstants')) {
			buildTheme();
			window.showInformationMessage('A setting to the Chimera Theme has changed that requires a reload to take effect.');
		}
	}));

}


/**
 * Rebuilds the theme templates for the updated configuration.
 */
function buildTheme (): void {
	compile(__dirname, workspace.getConfiguration('theme-chimera'));
}
