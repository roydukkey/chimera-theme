import ScopeSettings from './ScopeSettings';

interface Scope {

	/** Scope selector against which this rule matches. */
	readonly scope: string | string[];

	/** Description of the rule. */
	readonly name?: string;

	/** Colors and styles for the token. */
	readonly settings: ScopeSettings;

}

export default Scope;
