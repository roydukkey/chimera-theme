// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import type color from '../../util/color';


interface ScopeSettings {

	/** Foreground color for the token. */
	readonly foreground?: string | color;

	/** Font style of the rule: 'italic', 'bold' or 'underline' or a combination. The empty string unsets inherited settings. */
	readonly fontStyle?: '' | 'bold underline' | 'bold' | 'italic bold underline' | 'italic bold' | 'italic underline' | 'italic' | 'underline';

}


export default ScopeSettings;
