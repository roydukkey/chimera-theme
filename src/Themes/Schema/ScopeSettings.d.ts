// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import type { UnionToIntersection } from 'type-fest';
import type color from '../../util/color';


interface ScopeSettings {

	/** Foreground color for the token. */
	readonly foreground?: string | color;

	/** Font style of the rule: 'italic', 'bold' or 'underline' or a combination. The empty string unsets inherited settings. */
	readonly fontStyle?: FontStyle | '';

}


export default ScopeSettings;


/* eslint-disable @typescript-eslint/no-type-alias */
/**
 * @see {@link https://stackoverflow.com/questions/59471947}
 */
type UnionToOverloads<U> = UnionToIntersection<U extends unknown ? (f: U) => void : never>;
type PopUnion<U> = UnionToOverloads<U> extends (a: infer A) => void ? A : never;
type UnionConcat<U extends string, Sep extends string> = PopUnion<U> extends infer SELF
	? SELF extends string
		? Exclude<U, SELF> extends never
			? SELF
			: `${UnionConcat<Exclude<U, SELF>, Sep>}${Sep}${SELF}` | UnionConcat<Exclude<U, SELF>, Sep> | SELF
		: never
	: never;

type FontStyle = UnionConcat<'bold' | 'italic' | 'underline' | 'strikethrough', ' '>;

/* eslint-enable @typescript-eslint/no-type-alias */
