import { join } from 'path';
import { existsSync, readFileSync, writeFileSync } from 'fs';


export default class ExtensionConfiguration {

	private static documentPath = join(__dirname, './config.json');

	private static config: {
		isFirstRun?: boolean
	} = existsSync(ExtensionConfiguration.documentPath)
		? JSON.parse(readFileSync(ExtensionConfiguration.documentPath, 'utf8'))
		: {};

	/**
	 * Initializes a new instance of the ExtensionConfiguration class.
	 */
	private constructor () {
		throw new Error('This class is not constructable.');
	}

	/**
	 * Getter for whether or not the theme has run before.
	 */
	static get isFirstRun (): boolean {
		return this.config.isFirstRun ?? true;
	}

	/**
	 * Setter for whether or not the theme has run before.
	 */
	static set isFirstRun (value: boolean) {
		this.config.isFirstRun = value;
		this.save();
	}

	/**
	 * Save the extension's configuration to file.
	 */
	private static save (): void {
		writeFileSync(this.documentPath, JSON.stringify(this.config, null, '\t'));
	}

}
