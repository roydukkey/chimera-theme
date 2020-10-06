import base from './util/color';

export default class Color {

	// Main Colors
	static readonly Background = base('#1E1F29');
	static readonly CurrentLine = base('#44475A');
	static readonly Selection = base('#565A6D');
	static readonly Foreground = base('#DEE0E3');
	static readonly Comment = base('#6272A4');
	static readonly Cyan = base('#B6F6FD');
	static readonly Green = base('#9AE7A9');
	static readonly Orange = base('#FFCA92');
	static readonly Pink = base('#F3AFE6');
	static readonly Purple = base('#CAA9FA');
	static readonly Red = base('#F09489');
	static readonly Yellow = base('#F6FACA');

	// Color Variants
	static readonly BackgroundLight1 = Color.Background.lighten(0.225);
	static readonly BackgroundLight2 = Color.Background.lighten(0.485);
	static readonly BackgroundLight3 = Color.Background.lighten(0.825);
	static readonly BackgroundLight4 = Color.Background.lighten(0.975);
	static readonly BackgroundLight5 = Color.Background.lighten(1.3);

	static readonly ForegroundDark1 = Color.Foreground.darken(0.35);
	static readonly ForegroundDark2 = Color.Foreground.darken(0.5);
	static readonly ForegroundPurpleMix = Color.Foreground.mix(Color.Purple);

	static readonly CyanLight1 = Color.Cyan.darken(0.125).saturate(0.025);

	static readonly GreenDark1 = Color.Green.darken(0.35).desaturate(0.65);
	static readonly GreenYellowMix = Color.Green.mix(Color.Yellow);

	static readonly OrangeDark1 = Color.Orange.darken(0.50).desaturate(0.65);

	static readonly PinkDark1 = Color.Pink.darken(0.30).desaturate(0.50);
	static readonly PinkDark2 = Color.Pink.darken(0.35).desaturate(0.60);
	static readonly PinkDark3 = Color.Pink.darken(0.50).desaturate(0.70);

	static readonly PurpleDark1 = Color.Purple.darken(0.25).desaturate(0.55);
	static readonly PurpleDark2 = Color.Purple.darken(0.50).desaturate(0.75);

	static readonly RedDark1 = Color.Red.darken(0.35).desaturate(0.65);

	// Semantic
	static readonly Added = Color.Green;
	static readonly Conflict = Color.Yellow;
	static readonly Deleted = Color.Red;
	static readonly Ignored = Color.Comment;
	static readonly Modified = Color.Purple;
	static readonly Untracked = Color.Orange;

	static readonly Error = Color.Red;
	static readonly ErrorDark1 = Color.Red.darken(0.30).desaturate(0.50);
	static readonly ErrorDark2 = Color.Red.darken(0.60).desaturate(0.80);
	static readonly Info = Color.Cyan;
	static readonly Warning = Color.Yellow;
	static readonly WarningDark1 = Color.Yellow.darken(0.45).desaturate(0.75);
	static readonly WarningDark2 = Color.Yellow.darken(0.70).desaturate(0.85);

}
