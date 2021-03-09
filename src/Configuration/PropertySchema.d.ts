/**
 * Schema for the extension's contributing {@link https://code.visualstudio.com/api/references/contribution-points#Configuration-property-schema | `configuration properties`}.
 */
interface PropertySchema<T> {

	type?: string;
	default: T;

	enum?: T[];
	enumDescriptions?: string[];

	minimum?: T;
	maximum?: T;

	minLength?: number;
	maxLength?: number;

	minItems?: number;
	maxItems?: number;

	format?: string;

	pattern?: RegExp;
	patternErrorMessage?: string;

	description?: string;
	markdownDescription?: string;

	deprecationMessage?: string;
	markdownDeprecationMessage?: string;

	scope?: string;

}

export default PropertySchema;
