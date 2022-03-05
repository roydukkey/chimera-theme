// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import { to } from 'color-string';
import * as color from 'color';


// Override methods to return hex value.
color.prototype.toJSON =
color.prototype.toString = function (): string {
	return this.hex();
};


// Override method to return 8-digit hex value.
color.prototype.hex = function (value: never): string | color {
	if (arguments.length) {
		return new color(value);
	}

	const channels = this.rgb().round().color;

	if (this.valpha !== 1) {
		channels.push(this.valpha);
	}

	return to.hex(channels);
};


export default color;
