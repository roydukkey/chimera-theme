// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import Colors from '../Colors';
import Schema from './Schema';


export default class Chimera extends Schema {

	/**
	 * Initializes a new instance of the Chimera class.
	 */
	constructor () {
		super('Chimera');

		this.colors = {
			'activityBar.background': Colors.backgroundLight2,
			'activityBar.foreground': Colors.foreground,
			'activityBar.inactiveForeground': Colors['activityBar.inactiveForeground'],

			'activityBarBadge.background': Colors.pinkDark1,
			'activityBarBadge.foreground': Colors.foreground,

			'badge.background': Colors.backgroundLight4,
			'badge.foreground': Colors.foreground,

			'button.background': Colors.pinkDark3,

			'debugToolBar.background': Colors.backgroundLight3,

			'diffEditor.diagonalFill': Colors.backgroundLight3,
			'diffEditor.insertedTextBackground': Colors['diffEditor.insertedTextBackground'],
			'diffEditor.removedTextBackground': Colors['diffEditor.removedTextBackground'],

			'dropdown.background': Colors.backgroundLight3,

			'editor.background': Colors.background,
			'editor.findMatchBackground': Colors['editor.findMatchBackground'],
			'editor.findMatchHighlightBackground': Colors['editor.findMatchHighlightBackground'],
			'editor.foldBackground': Colors['editor.foldBackground'],
			'editor.foreground': Colors.foreground,
			'editor.hoverHighlightBackground': Colors['editor.hoverHighlightBackground'],
			'editor.lineHighlightBorder': Colors['editor.lineHighlightBorder'],
			'editor.rangeHighlightBackground': Colors['editor.rangeHighlightBackground'],
			'editor.selectionBackground': Colors['editor.selectionBackground'],
			'editor.selectionHighlightBackground': Colors['editor.selectionHighlightBackground'],
			'editor.stackFrameHighlightBackground': Colors.warningDark2,
			'editor.wordHighlightBackground': Colors['editor.wordHighlightBackground'],
			'editor.wordHighlightStrongBackground': Colors['editor.wordHighlightStrongBackground'],

			'editorBracketHighlight.foreground1': Colors.vibrantYellow2,
			'editorBracketHighlight.foreground2': Colors.vibrantCyan2,
			'editorBracketHighlight.foreground3': Colors.vibrantPink1,
			'editorBracketHighlight.unexpectedBracket.foreground': Colors.vibrantRed1,

			'editorBracketMatch.border': Colors.foregroundDark1,

			'editorCodeLens.foreground': Colors['editorCodeLens.foreground'],

			'editorError.foreground': Colors.error,

			'editorGroup.border': Colors.backgroundLight1,
			'editorGroup.dropBackground': Colors['editorGroup.dropBackground'],
			'editorGroupHeader.tabsBackground': Colors.backgroundLight1,

			'editorGutter.addedBackground': Colors['editorGutter.addedBackground'],
			'editorGutter.commentRangeForeground': Colors.comment,
			'editorGutter.deletedBackground': Colors['editorGutter.deletedBackground'],
			'editorGutter.modifiedBackground': Colors['editorGutter.modifiedBackground'],

			'editorHoverWidget.border': Colors.backgroundLight3,

			'editorIndentGuide.activeBackground': Colors.backgroundLight4,
			'editorIndentGuide.background': Colors.backgroundLight2,

			'editorInlayHint.foreground': Colors.comment,
			'editorInlayHint.background': '#0000',

			'editorLink.activeForeground': Colors.pink,

			'editorLineNumber.activeForeground': Colors.foreground,
			'editorLineNumber.foreground': Colors.comment,

			'editorOverviewRuler.addedForeground': Colors['editorOverviewRuler.addedForeground'],
			'editorOverviewRuler.deletedForeground': Colors['editorOverviewRuler.deletedForeground'],
			'editorOverviewRuler.errorForeground': Colors['editorOverviewRuler.errorForeground'],
			'editorOverviewRuler.findMatchForeground': Colors['editorOverviewRuler.findMatchForeground'],
			'editorOverviewRuler.wordHighlightForeground': Colors['editorOverviewRuler.wordHighlightForeground'],
			'editorOverviewRuler.wordHighlightStrongForeground': Colors['editorOverviewRuler.wordHighlightStrongForeground'],
			'editorOverviewRuler.infoForeground': Colors['editorOverviewRuler.infoForeground'],
			'editorOverviewRuler.modifiedForeground': Colors['editorOverviewRuler.modifiedForeground'],
			'editorOverviewRuler.warningForeground': Colors['editorOverviewRuler.warningForeground'],

			'editorRuler.foreground': Colors.backgroundLight4,

			'editorSuggestWidget.border': Colors.backgroundLight1,

			'editorWarning.foreground': Colors.green,

			'editorWhitespace.foreground': Colors.backgroundLight4,

			'editorWidget.background': Colors.backgroundLight1,

			'focusBorder': Colors.pinkDark1,

			'gitDecoration.addedResourceForeground': Colors.added,
			'gitDecoration.conflictingResourceForeground': Colors.conflict,
			'gitDecoration.deletedResourceForeground': Colors.deleted,
			'gitDecoration.ignoredResourceForeground': Colors.ignored,
			'gitDecoration.modifiedResourceForeground': Colors.modified,
			'gitDecoration.submoduleResourceForeground': Colors.purple,
			'gitDecoration.untrackedResourceForeground': Colors.untracked,

			'gitlens.trailingLineForegroundColor': Colors['gitlens.trailingLineForegroundColor'],

			'input.background': Colors.backgroundLight3,
			'input.placeholderForeground': Colors.foregroundDark1,

			'inputOption.activeBorder': Colors.pinkDark1,

			'inputValidation.errorBackground': Colors.errorDark2,
			'inputValidation.errorBorder': Colors.errorDark1,
			'inputValidation.errorForeground': Colors['inputValidation.errorForeground'],
			'inputValidation.warningBackground': Colors.warningDark2,
			'inputValidation.warningBorder': Colors.warningDark1,
			'inputValidation.warningForeground': Colors['inputValidation.warningForeground'],

			'list.activeSelectionBackground': Colors.pinkDark2,
			'list.activeSelectionIconForeground': Colors.foreground,
			'list.dropBackground': Colors.backgroundLight4,
			'list.errorForeground': Colors.error,
			'list.focusBackground': Colors.backgroundLight3,
			'list.highlightForeground': Colors.pink,
			'list.hoverBackground': Colors.backgroundLight2,
			'list.inactiveSelectionBackground': Colors.backgroundLight3,
			'list.warningForeground': Colors.green,

			'menu.background': Colors.backgroundLight1,
			'menu.foreground': '#CCCCCC',

			'notebook.selectedCellBackground': Colors.backgroundLight3,

			'panel.border': Colors.backgroundLight5,

			'panelTitle.activeBorder': Colors.pinkDark1,
			'panelTitle.inactiveForeground': Colors.comment,

			'pickerGroup.border': Colors.backgroundLight5,
			'pickerGroup.foreground': Colors.pink,

			'progressBar.background': Colors.purple,

			'sideBar.background': Colors.backgroundLight1,

			'sideBarSectionHeader.background': '#0000',
			'sideBarSectionHeader.border': Colors.backgroundLight5,

			'sideBarTitle.foreground': Colors.foreground,

			'scrollbarSlider.activeBackground': Colors['scrollbarSlider.activeBackground'],
			'scrollbarSlider.background': Colors['scrollbarSlider.background'],
			'scrollbarSlider.hoverBackground': Colors['scrollbarSlider.hoverBackground'],

			'settings.modifiedItemIndicator': Colors['settings.modifiedItemIndicator'],

			'statusBar.background': Colors.pinkDark3,
			'statusBar.debuggingBackground': Colors.orangeDark1,
			'statusBar.foreground': Colors.foreground,
			'statusBar.noFolderBackground': Colors.purpleDark2,

			'tab.inactiveBackground': Colors.backgroundLight2,
			'tab.lastPinnedBorder': Colors.backgroundLight5,

			'textBlockQuote.background': Colors.backgroundLight2,
			'textBlockQuote.border': Colors.purpleDark2,

			'textLink.activeForeground': Colors.pink,
			'textLink.foreground': Colors.pink,

			'titleBar.activeBackground': Colors.backgroundLight4,
			'titleBar.inactiveBackground': Colors.backgroundLight1,

			'tree.indentGuidesStroke': Colors['tree.indentGuidesStroke']
		};

		this.semanticHighlighting = true;

		this.semanticTokenColors = {
			newOperator: Colors.foreground,
			stringLiteral: Colors.yellow,
			customLiteral: Colors.foreground,
			numberLiteral: Colors.greenYellowMix
		};

		this.tokenColors = [

			{
				scope: [
					'meta.embedded',
					'source.groovy.embedded'
				],
				settings: {
					foreground: Colors.foreground
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
					foreground: Colors.comment
				}
			}, {
				scope: 'constant.language',
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: [
					'constant.numeric',
					'variable.other.enummember',
					'keyword.operator.plus.exponent',
					'keyword.operator.minus.exponent'
				],
				settings: {
					foreground: Colors.greenYellowMix
				}
			}, {
				scope: 'constant.regexp',
				settings: {
					foreground: '#646695'
				}
			}, {
				scope: 'entity.name.tag',
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: 'entity.name.tag.css',
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: 'entity.other.attribute-name',
				settings: {
					foreground: Colors.cyan
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
					foreground: Colors.pink
				}
			}, {
				scope: 'invalid',
				settings: {
					foreground: Colors.red
				}
			}, {
				scope: 'markup.italic',
				settings: {
					fontStyle: 'italic',
					foreground: Colors.orange
				}
			}, {
				scope: 'markup.strikethrough',
				settings: {
					fontStyle: 'strikethrough'
				}
			}, {
				scope: 'markup.underline',
				settings: {
					fontStyle: 'underline',
					foreground: Colors.orange
				}
			}, {
				scope: 'markup.bold',
				settings: {
					fontStyle: 'bold',
					foreground: Colors.orange
				}
			}, {
				scope: 'markup.heading',
				settings: {
					fontStyle: 'bold',
					foreground: Colors.pink
				}
			}, {
				scope: 'markup.inserted',
				settings: {
					foreground: Colors.greenYellowMix
				}
			}, {
				scope: [
					'markup.deleted',
					'markup.inline.raw'
				],
				settings: {
					foreground: Colors.yellow
				}
			}, {
				scope: 'markup.changed',
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: [
					'punctuation.definition.list.begin.markdown',
					'punctuation.definition.quote.begin.markdown'
				],
				settings: {
					foreground: Colors.purple
				}
			}, {
				name: 'brackets of XML/HTML tags',
				scope: 'punctuation.definition.tag',
				settings: {
					foreground: Colors.foregroundDark2
				}
			}, {
				scope: [
					'meta.preprocessor',
					'entity.name.function.preprocessor'
				],
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: 'meta.preprocessor.string',
				settings: {
					foreground: Colors.yellow
				}
			}, {
				scope: 'meta.preprocessor.numeric',
				settings: {
					foreground: Colors.greenYellowMix
				}
			}, {
				scope: 'meta.structure.dictionary.key.python',
				settings: {
					foreground: Colors.cyan
				}
			}, {
				scope: 'meta.diff.header',
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: 'storage',
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: 'storage.type',
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: [
					'storage.modifier',
					'keyword.operator.noexcept'
				],
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: [
					'string',
					'meta.embedded.assembly'
				],
				settings: {
					foreground: Colors.yellow
				}
			}, {
				scope: 'string.tag',
				settings: {
					foreground: Colors.yellow
				}
			}, {
				scope: 'string.value',
				settings: {
					foreground: Colors.yellow
				}
			}, {
				scope: 'string.regexp',
				settings: {
					foreground: Colors.red
				}
			}, {
				name: 'String interpolation',
				scope: [
					'punctuation.definition.template-expression.begin',
					'punctuation.definition.template-expression.end',
					'punctuation.section.embedded'
				],
				settings: {
					foreground: Colors.pink
				}
			}, {
				name: 'Reset JavaScript string interpolation expression',
				scope: 'meta.template.expression',
				settings: {
					foreground: Colors.foreground
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
					foreground: Colors.cyan
				}
			}, {
				scope: 'keyword',
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: 'keyword.control',
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: 'keyword.operator',
				settings: {
					foreground: Colors.foreground
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
					foreground: Colors.pink
				}
			}, {
				scope: [
					'keyword.other.unit',
					'keyword.control.unit'
				],
				settings: {
					foreground: Colors.greenYellowMix
				}
			}, {
				scope: [
					'punctuation.section.embedded.begin.php',
					'punctuation.section.embedded.end.php'
				],
				settings: {
					foreground: Colors.pink
				}
			}, {
				name: 'php instanceof',
				scope: 'keyword.operator.type.php',
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: 'support.function.git-rebase',
				settings: {
					foreground: Colors.cyan
				}
			}, {
				scope: 'constant.sha.git-rebase',
				settings: {
					foreground: Colors.greenYellowMix
				}
			}, {
				name: 'coloring of the Java import and package identifiers',
				scope: [
					'storage.modifier.import.java',
					'variable.language.wildcard.java',
					'storage.modifier.package.java'
				],
				settings: {
					foreground: Colors.foreground
				}
			}, {
				name: 'this.self',
				scope: 'variable.language',
				settings: {
					foreground: Colors.pink
				}
			}

		];
	}

}
