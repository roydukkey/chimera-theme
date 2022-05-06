// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import base from './util/color';


class Color {

	// Main Colors
	readonly background = base('#1E1F29');
	readonly currentLine = base('#44475A');
	readonly selection = base('#565A6D');
	readonly foreground = base('#DEE0E3');
	readonly comment = base('#6272A4');
	readonly cyan = base('#B6F6FD');
	readonly green = base('#9AE7A9');
	readonly orange = base('#FFCA92');
	readonly pink = base('#F3AFE6');
	readonly purple = base('#CAA9FA');
	readonly red = base('#F09489');
	readonly yellow = base('#F6FACA');

	// Color Variants
	readonly backgroundLight1 = this.background.lighten(0.225);
	readonly backgroundLight2 = this.background.lighten(0.485);
	readonly backgroundLight3 = this.background.lighten(0.825);
	readonly backgroundLight4 = this.background.lighten(0.975);
	readonly backgroundLight5 = this.background.lighten(1.3);

	readonly foregroundDark1 = this.foreground.darken(0.35);
	readonly foregroundDark2 = this.foreground.darken(0.5);

	readonly cyanLight1 = this.cyan.darken(0.125).saturate(0.025);

	readonly greenYellowMix = this.green.mix(this.yellow);

	readonly orangeDark1 = this.orange.darken(0.50).desaturate(0.65);

	readonly pinkDark1 = this.pink.darken(0.30).desaturate(0.50);
	readonly pinkDark2 = this.pink.darken(0.35).desaturate(0.60);
	readonly pinkDark3 = this.pink.darken(0.50).desaturate(0.70);

	readonly purpleDark1 = this.purple.darken(0.25).desaturate(0.55);
	readonly purpleDark2 = this.purple.darken(0.50).desaturate(0.75);

	// Semantic
	readonly added = this.green;
	readonly conflict = this.yellow;
	readonly deleted = this.red;
	readonly ignored = this.comment;
	readonly modified = this.purple;
	readonly untracked = this.orange;

	readonly error = this.red;
	readonly errorDark1 = this.red.darken(0.30).desaturate(0.50);
	readonly errorDark2 = this.red.darken(0.60).desaturate(0.80);
	readonly info = this.cyan;
	readonly warning = this.yellow;
	readonly warningDark1 = this.yellow.darken(0.45).desaturate(0.75);
	readonly warningDark2 = this.yellow.darken(0.70).desaturate(0.85);

	// Selection and Highlight
	readonly 'editor.selectionBackground' = this.selection.alpha(0.55);
	readonly 'editor.findMatchBackground' = this['editor.selectionBackground'];
	readonly 'editor.findMatchHighlightBackground' = this.orangeDark1.alpha(0.5);
	readonly 'editor.foldBackground' = this.comment.alpha(0.35);
	readonly 'editor.hoverHighlightBackground' = this.pink.alpha(0.2);
	readonly 'editor.lineHighlightBorder' = this.currentLine.alpha(0.4);
	readonly 'editor.rangeHighlightBackground' = this.orangeDark1.alpha(0.1);
	readonly 'editor.selectionHighlightBackground' = this.selection.alpha(0.3);
	readonly 'editor.wordHighlightBackground' = this.purple.alpha(0.2);
	readonly 'editor.wordHighlightStrongBackground' = this.purple.alpha(0.4);

	readonly 'editorOverviewRuler.wordHighlightForeground' = this['editor.wordHighlightBackground'];
	readonly 'editorOverviewRuler.wordHighlightStrongForeground' = this['editor.wordHighlightStrongBackground'];

	// CodeLens
	readonly 'editorCodeLens.foreground' = this.comment;
	readonly 'gitlens.trailingLineForegroundColor' = this.comment.alpha(0.45);

	// Specific
	readonly 'activityBar.inactiveForeground' = this.foreground.mix(this.purple).alpha(0.333);

	readonly 'diffEditor.insertedTextBackground' = this.green.darken(0.35).desaturate(0.65).alpha(0.266);
	readonly 'diffEditor.removedTextBackground' = this.red.darken(0.35).desaturate(0.65).alpha(0.266);

	readonly 'editorGroup.dropBackground' = this.backgroundLight4.alpha(0.6);
	readonly 'editorGutter.addedBackground' = this.added.alpha(0.6);
	readonly 'editorGutter.deletedBackground' = this.deleted.alpha(0.6);
	readonly 'editorGutter.modifiedBackground' = this.modified.alpha(0.6);

	readonly 'editorOverviewRuler.addedForeground' = this['editorGutter.addedBackground'];
	readonly 'editorOverviewRuler.deletedForeground' = this['editorGutter.deletedBackground'];
	readonly 'editorOverviewRuler.errorForeground' = this.error.alpha(0.6);
	readonly 'editorOverviewRuler.findMatchForeground' = this.orange.alpha(0.6);
	readonly 'editorOverviewRuler.infoForeground' = this.info.alpha(0.6);
	readonly 'editorOverviewRuler.modifiedForeground' = this['editorGutter.modifiedBackground'];
	readonly 'editorOverviewRuler.warningForeground' = this.warning.alpha(0.6);

	readonly 'inputValidation.errorForeground' = this.foreground.alpha(0.8);
	readonly 'inputValidation.warningForeground' = this['inputValidation.errorForeground'];

	readonly 'scrollbarSlider.activeBackground' = this.backgroundLight4.alpha(0.752);
	readonly 'scrollbarSlider.background' = this.backgroundLight4.alpha(0.4);
	readonly 'scrollbarSlider.hoverBackground' = this.backgroundLight4.alpha(0.65);

	readonly 'settings.modifiedItemIndicator' = this['editorGutter.modifiedBackground'];

	readonly 'tree.indentGuidesStroke' = this.foreground.alpha(0.266);

	// C#
	readonly 'meta.preprocessor.cs.yellow' = this.yellow.alpha(0.498);
	readonly 'meta.preprocessor.cs.purple' = this.purple.alpha(0.498);
	readonly 'meta.preprocessor.cs.foreground' = this.foreground.alpha(0.498);
	readonly 'meta.preprocessor.cs.cyan' = this.cyan.alpha(0.498);
	readonly 'meta.preprocessor.cs.greenYellowMix' = this.greenYellowMix.alpha(0.498);

}


export default new Color();
