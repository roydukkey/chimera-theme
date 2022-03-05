// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import type Scope from './Scope';
import type color from '../../util/color';


export default abstract class Schema {

	/** Whether semantic highlighting should be enabled for this theme. */
	protected semanticHighlighting?: boolean;

	/** Colors in the workbench. */
	protected colors?: {
		[key: string]: string | color;
	};

	/** Colors for semantic tokens. */
	protected semanticTokenColors?: {
		[key: string]: string | color;
	};

	/** Colors for syntax highlighting. */
	protected tokenColors?: Scope[];

	protected include?: string;
	readonly name;

	get $schema (): string {
		return 'vscode://schemas/color-theme';
	}

	/**
	 * Initializes a new instance of the Schema class.
	 *
	 * @param themeName - The name of the theme
	 */
	protected constructor (themeName: string) {
		this.name = themeName;
	}

}
