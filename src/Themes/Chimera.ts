import Color from '../Color';
import Schema from './Schema';

export default class Chimera extends Schema {

	/**
	 * Initializes a new instance of the Chimera class.
	 */
	constructor () {
		super('Chimera');

		this.colors = {
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

			'editorInlayHint.foreground': Color.comment,
			'editorInlayHint.background': '#0000',

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

			'editorRuler.foreground': Color.backgroundLight4,

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
			'list.activeSelectionIconForeground': Color.foreground,
			'list.dropBackground': Color.backgroundLight4,
			'list.errorForeground': Color.error,
			'list.focusBackground': Color.backgroundLight3,
			'list.highlightForeground': Color.pink,
			'list.hoverBackground': Color.backgroundLight2,
			'list.inactiveSelectionBackground': Color.backgroundLight3,
			'list.warningForeground': Color.green,

			'menu.background': Color.backgroundLight1,
			'menu.foreground': '#CCCCCC',

			'notebook.selectedCellBackground': Color.backgroundLight3,

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

		this.semanticHighlighting = true;

		this.semanticTokenColors = {
			newOperator: Color.foreground,
			stringLiteral: Color.yellow,
			customLiteral: Color.foreground,
			numberLiteral: Color.greenYellowMix
		};

		this.tokenColors = [

			{
				scope: [
					'meta.embedded',
					'source.groovy.embedded'
				],
				settings: {
					foreground: Color.foreground
				}
			}, {
				scope: 'emphasis',
				settings: {
					fontStyle: 'italic'
				}
			}, {
				scope: 'strong',
				settings: {
					fontStyle: 'bold'
				}
			}, {
				scope: 'header',
				settings: {
					foreground: '#000080'
				}
			}, {
				scope: 'comment',
				settings: {
					foreground: Color.comment
				}
			}, {
				scope: 'constant.language',
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: [
					'constant.numeric',
					'variable.other.enummember',
					'keyword.operator.plus.exponent',
					'keyword.operator.minus.exponent'
				],
				settings: {
					foreground: Color.greenYellowMix
				}
			}, {
				scope: 'constant.regexp',
				settings: {
					foreground: '#646695'
				}
			}, {
				scope: 'entity.name.tag',
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: 'entity.name.tag.css',
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: 'entity.other.attribute-name',
				settings: {
					foreground: Color.cyan
				}
			}, {
				scope: [
					'entity.other.attribute-name.class.css',
					'entity.other.attribute-name.class.mixin.css',
					'entity.other.attribute-name.id.css',
					'entity.other.attribute-name.parent-selector.css',
					'entity.other.attribute-name.pseudo-class.css',
					'entity.other.attribute-name.pseudo-element.css',
					'source.css.less entity.other.attribute-name.id',
					'entity.other.attribute-name.scss'
				],
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: 'invalid',
				settings: {
					foreground: Color.red
				}
			}, {
				scope: 'markup.italic',
				settings: {
					fontStyle: 'italic',
					foreground: Color.orange
				}
			}, {
				scope: 'markup.underline',
				settings: {
					fontStyle: 'underline',
					foreground: Color.orange
				}
			}, {
				scope: 'markup.bold',
				settings: {
					fontStyle: 'bold',
					foreground: Color.orange
				}
			}, {
				scope: 'markup.heading',
				settings: {
					fontStyle: 'bold',
					foreground: Color.pink
				}
			}, {
				scope: 'markup.inserted',
				settings: {
					foreground: Color.greenYellowMix
				}
			}, {
				scope: [
					'markup.deleted',
					'markup.inline.raw'
				],
				settings: {
					foreground: Color.yellow
				}
			}, {
				scope: 'markup.changed',
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: [
					'punctuation.definition.list.begin.markdown',
					'punctuation.definition.quote.begin.markdown'
				],
				settings: {
					foreground: Color.purple
				}
			}, {
				name: 'brackets of XML/HTML tags',
				scope: 'punctuation.definition.tag',
				settings: {
					foreground: Color.foregroundDark2
				}
			}, {
				scope: [
					'meta.preprocessor',
					'entity.name.function.preprocessor'
				],
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: 'meta.preprocessor.string',
				settings: {
					foreground: Color.yellow
				}
			}, {
				scope: 'meta.preprocessor.numeric',
				settings: {
					foreground: Color.greenYellowMix
				}
			}, {
				scope: 'meta.structure.dictionary.key.python',
				settings: {
					foreground: Color.cyan
				}
			}, {
				scope: 'meta.diff.header',
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: 'storage',
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: 'storage.type',
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: [
					'storage.modifier',
					'keyword.operator.noexcept'
				],
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: [
					'string',
					'meta.embedded.assembly'
				],
				settings: {
					foreground: Color.yellow
				}
			}, {
				scope: 'string.tag',
				settings: {
					foreground: Color.yellow
				}
			}, {
				scope: 'string.value',
				settings: {
					foreground: Color.yellow
				}
			}, {
				scope: 'string.regexp',
				settings: {
					foreground: Color.red
				}
			}, {
				name: 'String interpolation',
				scope: [
					'punctuation.definition.template-expression.begin',
					'punctuation.definition.template-expression.end',
					'punctuation.section.embedded'
				],
				settings: {
					foreground: Color.pink
				}
			}, {
				name: 'Reset JavaScript string interpolation expression',
				scope: 'meta.template.expression',
				settings: {
					foreground: Color.foreground
				}
			}, {
				scope: [
					'support.type.vendored.property-name',
					'support.type.property-name',
					'variable.css',
					'variable.scss',
					'variable.other.less',
					'source.coffee.embedded'
				],
				settings: {
					foreground: Color.cyan
				}
			}, {
				scope: 'keyword',
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: 'keyword.control',
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: 'keyword.operator',
				settings: {
					foreground: Color.foreground
				}
			}, {
				scope: [
					'keyword.operator.new',
					'keyword.operator.expression',
					'keyword.operator.cast',
					'keyword.operator.sizeof',
					'keyword.operator.alignof',
					'keyword.operator.typeid',
					'keyword.operator.alignas',
					'keyword.operator.instanceof',
					'keyword.operator.logical.python',
					'keyword.operator.wordlike'
				],
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: [
					'keyword.other.unit',
					'keyword.control.unit'
				],
				settings: {
					foreground: Color.greenYellowMix
				}
			}, {
				scope: [
					'punctuation.section.embedded.begin.php',
					'punctuation.section.embedded.end.php'
				],
				settings: {
					foreground: Color.pink
				}
			}, {
				name: 'php instanceof',
				scope: 'keyword.operator.type.php',
				settings: {
					foreground: Color.pink
				}
			}, {
				scope: 'support.function.git-rebase',
				settings: {
					foreground: Color.cyan
				}
			}, {
				scope: 'constant.sha.git-rebase',
				settings: {
					foreground: Color.greenYellowMix
				}
			}, {
				name: 'coloring of the Java import and package identifiers',
				scope: [
					'storage.modifier.import.java',
					'variable.language.wildcard.java',
					'storage.modifier.package.java'
				],
				settings: {
					foreground: Color.foreground
				}
			}, {
				name: 'this.self',
				scope: 'variable.language',
				settings: {
					foreground: Color.pink
				}
			}

		];
	}

}
