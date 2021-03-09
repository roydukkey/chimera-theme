import Color from '../Color';
import Schema from './Schema';

export default class ChimeraDefaults extends Schema {

	/**
	 * Initializes a new instance of the ChimeraDefaults class.
	 */
	constructor () {
		super('Chimera Default Colors');

		this.semanticHighlighting = true;

		this.colors = {

			// Alpha values are converted from 8-bit hex values:
			// https://8-digit-hex-converter.website/

			'activityBar.background': Color.backgroundLight2,
			'activityBar.foreground': Color.foreground,
			'activityBar.inactiveForeground': Color.foregroundPurpleMix.alpha(0.333),

			'activityBarBadge.background': Color.pinkDark1,
			'activityBarBadge.foreground': Color.foreground,

			'badge.background': Color.backgroundLight4,
			'badge.foreground': Color.foreground,

			'button.background': Color.pinkDark3,

			'debugToolBar.background': Color.backgroundLight3,

			'diffEditor.diagonalFill': Color.backgroundLight3,
			'diffEditor.insertedTextBackground': Color.greenDark1.alpha(0.266),
			'diffEditor.removedTextBackground': Color.redDark1.alpha(0.266),

			'dropdown.background': Color.backgroundLight3,

			'editor.background': Color.background,
			'editor.findMatchBackground': Color.selection.alpha(0.55),
			'editor.findMatchHighlightBackground': Color.orangeDark1.alpha(0.5),
			'editor.foreground': Color.foreground,
			'editor.hoverHighlightBackground': Color.pink.alpha(0.2),
			'editor.lineHighlightBorder': Color.currentLine.alpha(0.4),
			'editor.rangeHighlightBackground': Color.orangeDark1.alpha(0.1),
			'editor.selectionBackground': Color.selection.alpha(0.55),
			'editor.selectionHighlightBackground': Color.selection.alpha(0.3),
			'editor.stackFrameHighlightBackground': Color.warningDark2,
			'editor.wordHighlightBackground': Color.purple.alpha(0.2),
			'editor.wordHighlightStrongBackground': Color.purple.alpha(0.4),

			'editorCodeLens.foreground': Color.comment.alpha(0.333),

			'editorError.foreground': Color.error,

			'editorGroup.border': Color.backgroundLight1,
			'editorGroup.dropBackground': Color.backgroundLight4.alpha(0.6),
			'editorGroupHeader.tabsBackground': Color.backgroundLight1,

			'editorGutter.addedBackground': Color.added.alpha(0.6),
			'editorGutter.commentRangeForeground': Color.comment,
			'editorGutter.deletedBackground': Color.deleted.alpha(0.6),
			'editorGutter.modifiedBackground': Color.modified.alpha(0.6),

			'editorHoverWidget.border': Color.backgroundLight3,

			'editorIndentGuide.activeBackground': Color.backgroundLight4,
			'editorIndentGuide.background': Color.backgroundLight2,

			'editorLink.activeForeground': Color.pink,

			'editorLineNumber.activeForeground': Color.foreground,
			'editorLineNumber.foreground': Color.comment,

			'editorOverviewRuler.addedForeground': Color.added.alpha(0.6),
			'editorOverviewRuler.deletedForeground': Color.deleted.alpha(0.6),
			'editorOverviewRuler.errorForeground': Color.error.alpha(0.6),
			'editorOverviewRuler.findMatchForeground': Color.orange.alpha(0.6),
			'editorOverviewRuler.wordHighlightForeground': Color.purple.alpha(0.2),
			'editorOverviewRuler.wordHighlightStrongForeground': Color.purple.alpha(0.4),
			'editorOverviewRuler.infoForeground': Color.info.alpha(0.6),
			'editorOverviewRuler.modifiedForeground': Color.modified.alpha(0.6),
			'editorOverviewRuler.warningForeground': Color.warning.alpha(0.6),

			'editorSuggestWidget.border': Color.backgroundLight1,

			'editorWarning.foreground': Color.green,

			'editorWhitespace.foreground': Color.backgroundLight4,

			'editorWidget.background': Color.backgroundLight1,

			'focusBorder': Color.pinkDark1,

			'gitDecoration.addedResourceForeground': Color.added,
			'gitDecoration.conflictingResourceForeground': Color.conflict,
			'gitDecoration.deletedResourceForeground': Color.deleted,
			'gitDecoration.ignoredResourceForeground': Color.ignored,
			'gitDecoration.modifiedResourceForeground': Color.modified,
			'gitDecoration.submoduleResourceForeground': Color.purple,
			'gitDecoration.untrackedResourceForeground': Color.untracked,

			'gitlens.trailingLineForegroundColor': Color.comment.alpha(0.333),

			'input.background': Color.backgroundLight3,
			'input.placeholderForeground': Color.foregroundDark1,

			'inputOption.activeBorder': Color.pinkDark1,

			'inputValidation.errorBackground': Color.errorDark2,
			'inputValidation.errorBorder': Color.errorDark1,
			'inputValidation.errorForeground': Color.foreground.alpha(0.8),
			'inputValidation.warningBackground': Color.warningDark2,
			'inputValidation.warningBorder': Color.warningDark1,
			'inputValidation.warningForeground': Color.foreground.alpha(0.8),

			'list.activeSelectionBackground': Color.pinkDark2,
			'list.errorForeground': Color.error,
			'list.focusBackground': Color.backgroundLight3,
			'list.highlightForeground': Color.pink,
			'list.hoverBackground': Color.backgroundLight2,
			'list.inactiveSelectionBackground': Color.backgroundLight3,
			'list.warningForeground': Color.green,

			'menu.background': Color.backgroundLight1,
			'menu.foreground': '#CCCCCC',

			'panel.border': Color.backgroundLight5,

			'panelTitle.activeBorder': Color.pinkDark1,
			'panelTitle.inactiveForeground': Color.comment,

			'pickerGroup.border': Color.backgroundLight5,
			'pickerGroup.foreground': Color.pink,

			'progressBar.background': Color.purple,

			'sideBar.background': Color.backgroundLight1,

			'sideBarSectionHeader.background': '#0000',
			'sideBarSectionHeader.border': Color.backgroundLight5,

			'sideBarTitle.foreground': Color.foreground,

			'scrollbarSlider.activeBackground': Color.backgroundLight4.alpha(0.752),
			'scrollbarSlider.background': Color.backgroundLight4.alpha(0.4),
			'scrollbarSlider.hoverBackground': Color.backgroundLight4.alpha(0.65),

			'settings.modifiedItemIndicator': Color.modified.alpha(0.6),

			'statusBar.background': Color.pinkDark3,
			'statusBar.debuggingBackground': Color.orangeDark1,
			'statusBar.foreground': Color.foreground,
			'statusBar.noFolderBackground': Color.purpleDark2,

			'tab.inactiveBackground': Color.backgroundLight2,
			'tab.lastPinnedBorder': Color.backgroundLight5,

			'textBlockQuote.background': Color.backgroundLight2,
			'textBlockQuote.border': Color.purpleDark2,

			'textLink.activeForeground': Color.pink,
			'textLink.foreground': Color.pink,

			'titleBar.activeBackground': Color.backgroundLight4,
			'titleBar.inactiveBackground': Color.backgroundLight1,

			'tree.indentGuidesStroke': Color.foreground.alpha(0.266)

		};
	}

}
