import Scope from './Scope';
import color from '../../util/color';

export default abstract class Schema {

	readonly $schema = 'vscode://schemas/color-theme';
	readonly name;
	protected include?: string;

	/** Whether semantic highlighting should be enabled for this theme. */
	protected semanticHighlighting?: Boolean;

	/** Colors in the workbench. */
	protected colors?: Record<string, string | color>;

	/** Colors for semantic tokens. */
	protected semanticTokenColors?: Record<string, string | color>;

	/** Colors for syntax highlighting. */
	protected tokenColors?: Scope[];

	/**
	 * Initializes a new instance of the Schema class.
	 *
	 * @param themeName - The name of the theme
	 */
	protected constructor (themeName: string) {
		this.name = themeName;
	}

}
