'use strict';

const Color = require('color');

// Main Colors
let colors = {
	Background:		Color('#1E1F29'),
	CurrentLine:	Color('#44475A'),
	Selection:		Color('#6E799B'),
	Foreground:		Color('#DEE0E3'),
	Comment:			Color('#6272A4'),
	Cyan:					Color('#B6F6FD'),
	Green:				Color('#9AE7A9'),
	Orange:				Color('#FFCA92'),
	Pink:					Color('#F3AFE6'),
	Purple:				Color('#CAA9FA'),
	Red:					Color('#F09489'),
	Yellow: 			Color('#F6FACA')
};

// Color Variants
colors.BackgroundLight1 = colors.Background.lighten(0.225);
colors.BackgroundLight2 = colors.Background.lighten(0.485);
colors.BackgroundLight3 = colors.Background.lighten(0.825);
colors.BackgroundLight4 = colors.Background.lighten(0.975);
colors.BackgroundLight5 = colors.Background.lighten(1.75);

colors.ForegroundDark1 = colors.Foreground.darken(0.35);
colors.ForegroundDark2 = colors.Foreground.darken(0.5);
colors.ForegroundPurpleMix = colors.Foreground.mix(colors.Purple);

colors.PinkDark1 = colors.Pink.darken(0.30).desaturate(0.50);
colors.PinkDark2 = colors.Pink.darken(0.35).desaturate(0.60);
colors.PinkDark3 = colors.Pink.darken(0.45).desaturate(0.75);

colors.PurpleDark1 = colors.Purple.darken(0.25).desaturate(0.55);
colors.PurpleDark2 = colors.Purple.darken(0.50).desaturate(0.75);

colors.GreenDark1 = colors.Green.darken(0.35).desaturate(0.65);

colors.GreenYellowMix = colors.Green.mix(colors.Yellow);

colors.RedDark1 = colors.Red.darken(0.35).desaturate(0.65);

// Semantic
colors.Added = colors.Green;
colors.Conflict = colors.Yellow;
colors.Deleted = colors.Red;
colors.Ignored = colors.Comment;
colors.Modified = colors.Purple;
colors.Untracked = colors.Orange;

colors.Error = colors.Red;
colors.ErrorDark1 = colors.Red.darken(0.30).desaturate(0.50);
colors.ErrorDark2 = colors.Red.darken(0.60).desaturate(0.80);
colors.Info = colors.Cyan;
colors.Warning = colors.Yellow;
colors.WarningDark1 = colors.Yellow.darken(0.45).desaturate(0.75);
colors.WarningDark2 = colors.Yellow.darken(0.70).desaturate(0.85);

module.exports = colors;
