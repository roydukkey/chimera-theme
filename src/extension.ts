import { ExtensionContext, window, workspace } from 'vscode';

/**
 * This method is called when the extension is activated. It initializes the core functionality of the extension.
 *
 * @param context - A collection of utilities private to an extension.
 */
export function activate (context: ExtensionContext): void {

	// When theme configuration changes...
	context.subscriptions.push(workspace.onDidChangeConfiguration((event) => {
		if (event.affectsConfiguration('theme-chimera.plus.contrastConstants')) {
			window.showInformationMessage('Congratulations, the configuration for your extension has changed!');
		}
	}));

}
