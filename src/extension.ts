import type { ExtensionContext } from 'vscode';
import type { WorkspaceConfiguration } from './Configuration';
import generateThemes from './generateThemes';
import { ExtensionMode, commands, window, workspace } from 'vscode';
import * as vscode from 'vscode';


const lastCompiledVersionKey = 'CompiledVersionKey';


/**
 * This method is called when the extension is activated. It initializes the core functionality of the extension.
 *
 * @param context - A collection of utilities private to an extension.
 */
export function activate (context: ExtensionContext): void {
	const { displayName, name, version } = context.extension.packageJSON;

	if (context.extensionMode === ExtensionMode.Development) {
		context.globalState.update(lastCompiledVersionKey, undefined);
	}

	// Theme should be rebuilt after installation and upgrade.
	if (context.globalState.get<string>(lastCompiledVersionKey) !== version) {
		buildTheme(name, context);
		context.globalState.update(lastCompiledVersionKey, version);
		requestReload(`Please reload Visual Studio Code to complete the installation of ${displayName}.`);
	}

	// When theme configuration changes, rebuild theme.
	const disposable = workspace.onDidChangeConfiguration((event) => {
		if (event.affectsConfiguration(`${name}.plus.contrastConstants`)) {
			buildTheme(name, context);
			requestReload(`A setting to ${displayName} has changed that requires a reload to take effect.`);
		}
	});

	context.subscriptions.push(disposable);
}


/**
 * Rebuilds the theme templates for the updated configuration.
 */
function buildTheme (name: string, context: ExtensionContext): void {
	const config = workspace.getConfiguration(name) as unknown as WorkspaceConfiguration;
	const basePath = vscode.Uri.joinPath(context.extensionUri, './dist');

	generateThemes(config).forEach(([fileName, content]) => {
		const file = vscode.Uri.joinPath(basePath, fileName);
		const buffer = Uint8Array.from(content, (x) => x.charCodeAt(0));
		workspace.fs.writeFile(file, buffer);
	});
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
