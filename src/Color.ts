import base from './util/color';

export default class Color {

	// Main Colors
	static readonly background = base('#1E1F29');
	static readonly currentLine = base('#44475A');
	static readonly selection = base('#565A6D');
	static readonly foreground = base('#DEE0E3');
	static readonly comment = base('#6272A4');
	static readonly cyan = base('#B6F6FD');
	static readonly green = base('#9AE7A9');
	static readonly orange = base('#FFCA92');
	static readonly pink = base('#F3AFE6');
	static readonly purple = base('#CAA9FA');
	static readonly red = base('#F09489');
	static readonly yellow = base('#F6FACA');

	// Color Variants
	static readonly backgroundLight1 = Color.background.lighten(0.225);
	static readonly backgroundLight2 = Color.background.lighten(0.485);
	static readonly backgroundLight3 = Color.background.lighten(0.825);
	static readonly backgroundLight4 = Color.background.lighten(0.975);
	static readonly backgroundLight5 = Color.background.lighten(1.3);

	static readonly foregroundDark1 = Color.foreground.darken(0.35);
	static readonly foregroundDark2 = Color.foreground.darken(0.5);
	static readonly foregroundPurpleMix = Color.foreground.mix(Color.purple);

	static readonly cyanLight1 = Color.cyan.darken(0.125).saturate(0.025);

	static readonly greenDark1 = Color.green.darken(0.35).desaturate(0.65);
	static readonly greenYellowMix = Color.green.mix(Color.yellow);

	static readonly orangeDark1 = Color.orange.darken(0.50).desaturate(0.65);

	static readonly pinkDark1 = Color.pink.darken(0.30).desaturate(0.50);
	static readonly pinkDark2 = Color.pink.darken(0.35).desaturate(0.60);
	static readonly pinkDark3 = Color.pink.darken(0.50).desaturate(0.70);

	static readonly purpleDark1 = Color.purple.darken(0.25).desaturate(0.55);
	static readonly purpleDark2 = Color.purple.darken(0.50).desaturate(0.75);

	static readonly redDark1 = Color.red.darken(0.35).desaturate(0.65);

	// Semantic
	static readonly added = Color.green;
	static readonly conflict = Color.yellow;
	static readonly deleted = Color.red;
	static readonly ignored = Color.comment;
	static readonly modified = Color.purple;
	static readonly untracked = Color.orange;

	static readonly error = Color.red;
	static readonly errorDark1 = Color.red.darken(0.30).desaturate(0.50);
	static readonly errorDark2 = Color.red.darken(0.60).desaturate(0.80);
	static readonly info = Color.cyan;
	static readonly warning = Color.yellow;
	static readonly warningDark1 = Color.yellow.darken(0.45).desaturate(0.75);
	static readonly warningDark2 = Color.yellow.darken(0.70).desaturate(0.85);

}
