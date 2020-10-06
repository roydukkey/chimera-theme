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

			'activityBar.background': Color.BackgroundLight2,
			'activityBar.foreground': Color.Foreground,
			'activityBar.inactiveForeground': Color.ForegroundPurpleMix.alpha(0.333),

			'activityBarBadge.background': Color.PinkDark1,
			'activityBarBadge.foreground': Color.Foreground,

			'badge.background': Color.BackgroundLight4,
			'badge.foreground': Color.Foreground,

			'button.background': Color.PinkDark3,

			'debugToolBar.background': Color.BackgroundLight3,

			'diffEditor.diagonalFill': Color.BackgroundLight3,
			'diffEditor.insertedTextBackground': Color.GreenDark1.alpha(0.266),
			'diffEditor.removedTextBackground': Color.RedDark1.alpha(0.266),

			'dropdown.background': Color.BackgroundLight3,

			'editor.background': Color.Background,
			'editor.foreground': Color.Foreground,
			'editor.lineHighlightBorder': Color.CurrentLine.alpha(0.4),
			'editor.selectionBackground': Color.Selection.alpha(0.8),
			'editor.stackFrameHighlightBackground': Color.WarningDark2,
			'editor.wordHighlightBackground': Color.Pink.alpha(0.2),
			'editor.wordHighlightStrongBackground': Color.Pink.alpha(0.4),

			'editorCodeLens.foreground': Color.Comment.alpha(0.333),

			'editorError.foreground': Color.Error,

			'editorGroup.border': Color.BackgroundLight1,
			'editorGroup.dropBackground': Color.BackgroundLight4.alpha(0.6),
			'editorGroupHeader.tabsBackground': Color.BackgroundLight1,

			'editorGutter.addedBackground': Color.Added.alpha(0.6),
			'editorGutter.commentRangeForeground': Color.Comment,
			'editorGutter.deletedBackground': Color.Deleted.alpha(0.6),
			'editorGutter.modifiedBackground': Color.Modified.alpha(0.6),

			'editorHoverWidget.border': Color.BackgroundLight3,

			'editorIndentGuide.activeBackground': Color.BackgroundLight4,
			'editorIndentGuide.background': Color.BackgroundLight2,

			'editorLineNumber.activeForeground': Color.Foreground,
			'editorLineNumber.foreground': Color.Comment,

			'editorOverviewRuler.addedForeground': Color.Added.alpha(0.6),
			'editorOverviewRuler.deletedForeground': Color.Deleted.alpha(0.6),
			'editorOverviewRuler.errorForeground': Color.Error.alpha(0.6),
			'editorOverviewRuler.infoForeground': Color.Info.alpha(0.6),
			'editorOverviewRuler.modifiedForeground': Color.Modified.alpha(0.6),
			'editorOverviewRuler.warningForeground': Color.Warning.alpha(0.6),

			'editorSuggestWidget.border': Color.BackgroundLight1,

			'editorWarning.foreground': Color.Green,

			'editorWhitespace.foreground': Color.BackgroundLight4,

			'editorWidget.background': Color.BackgroundLight1,

			'focusBorder': Color.PinkDark1,

			'gitDecoration.addedResourceForeground': Color.Added,
			'gitDecoration.conflictingResourceForeground': Color.Conflict,
			'gitDecoration.deletedResourceForeground': Color.Deleted,
			'gitDecoration.ignoredResourceForeground': Color.Ignored,
			'gitDecoration.modifiedResourceForeground': Color.Modified,
			'gitDecoration.submoduleResourceForeground': Color.Purple,
			'gitDecoration.untrackedResourceForeground': Color.Untracked,

			'gitlens.trailingLineForegroundColor': Color.Comment.alpha(0.333),

			'input.background': Color.BackgroundLight3,
			'input.placeholderForeground': Color.ForegroundDark1,

			'inputOption.activeBorder': Color.PinkDark1,

			'inputValidation.errorBackground': Color.ErrorDark2,
			'inputValidation.errorBorder': Color.ErrorDark1,
			'inputValidation.errorForeground': Color.Foreground.alpha(0.8),
			'inputValidation.warningBackground': Color.WarningDark2,
			'inputValidation.warningBorder': Color.WarningDark1,
			'inputValidation.warningForeground': Color.Foreground.alpha(0.8),

			'list.activeSelectionBackground': Color.PinkDark2,
			'list.errorForeground': Color.Error,
			'list.focusBackground': Color.BackgroundLight3,
			'list.highlightForeground': Color.Pink,
			'list.hoverBackground': Color.BackgroundLight2,
			'list.inactiveSelectionBackground': Color.BackgroundLight3,
			'list.warningForeground': Color.Green,

			'menu.background': Color.BackgroundLight1,
			'menu.foreground': '#CCCCCC',

			'panel.border': Color.BackgroundLight5,

			'panelTitle.activeBorder': Color.PinkDark1,
			'panelTitle.inactiveForeground': Color.Comment,

			'pickerGroup.border': Color.BackgroundLight5,
			'pickerGroup.foreground': Color.Pink,

			'progressBar.background': Color.Purple,

			'sideBar.background': Color.BackgroundLight1,

			'sideBarSectionHeader.background': '#0000',
			'sideBarSectionHeader.border': Color.BackgroundLight5,

			'sideBarTitle.foreground': Color.Foreground,

			'scrollbarSlider.activeBackground': Color.BackgroundLight4.alpha(0.752),
			'scrollbarSlider.background': Color.BackgroundLight4.alpha(0.501),
			'scrollbarSlider.hoverBackground': Color.BackgroundLight4.alpha(0.65),

			'settings.modifiedItemIndicator': Color.Modified.alpha(0.6),

			'statusBar.background': Color.PinkDark3,
			'statusBar.debuggingBackground': Color.OrangeDark1,
			'statusBar.foreground': Color.Foreground,
			'statusBar.noFolderBackground': Color.PurpleDark2,

			'tab.inactiveBackground': Color.BackgroundLight2,

			'textBlockQuote.background': Color.BackgroundLight2,
			'textBlockQuote.border': Color.PurpleDark2,

			'textLink.activeForeground': Color.Pink,
			'textLink.foreground': Color.Pink,

			'titleBar.activeBackground': Color.BackgroundLight4,
			'titleBar.inactiveBackground': Color.BackgroundLight1,

			'tree.indentGuidesStroke': Color.Foreground.alpha(0.266)

		};
	}

}
