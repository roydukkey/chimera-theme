import Color from '../Color';
import Schema from './Schema';

export default class Chimera extends Schema {

	/**
	 * Initializes a new instance of the Chimera class.
	 */
	constructor () {
		super('Chimera');

		this.include = './chimera-defaults.json';

		this.semanticTokenColors = {
			newOperator: Color.Foreground,
			stringLiteral: Color.Yellow,
			customLiteral: Color.Foreground,
			numberLiteral: Color.GreenYellowMix
		};

		this.tokenColors = [

			{
				scope: [
					'meta.embedded',
					'source.groovy.embedded'
				],
				settings: {
					foreground: Color.Foreground
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
					foreground: Color.Comment
				}
			}, {
				scope: 'constant.language',
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: [
					'constant.numeric',
					'variable.other.enummember',
					'keyword.operator.plus.exponent',
					'keyword.operator.minus.exponent'
				],
				settings: {
					foreground: Color.GreenYellowMix
				}
			}, {
				scope: 'constant.regexp',
				settings: {
					foreground: '#646695'
				}
			}, {
				scope: 'entity.name.tag',
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: 'entity.name.tag.css',
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: 'entity.other.attribute-name',
				settings: {
					foreground: Color.Cyan
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
					'entity.other.attribute-name.attribute.scss',
					'entity.other.attribute-name.scss'
				],
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: 'invalid',
				settings: {
					foreground: Color.Red
				}
			}, {
				scope: 'markup.italic',
				settings: {
					fontStyle: 'italic',
					foreground: Color.Orange
				}
			}, {
				scope: 'markup.underline',
				settings: {
					fontStyle: 'underline',
					foreground: Color.Orange
				}
			}, {
				scope: 'markup.bold',
				settings: {
					fontStyle: 'bold',
					foreground: Color.Orange
				}
			}, {
				scope: 'markup.heading',
				settings: {
					fontStyle: 'bold',
					foreground: Color.Pink
				}
			}, {
				scope: 'markup.inserted',
				settings: {
					foreground: Color.GreenYellowMix
				}
			}, {
				scope: [
					'markup.deleted',
					'markup.inline.raw'
				],
				settings: {
					foreground: Color.Yellow
				}
			}, {
				scope: 'markup.changed',
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: [
					'punctuation.definition.list.begin.markdown',
					'punctuation.definition.quote.begin.markdown'
				],
				settings: {
					foreground: Color.Purple
				}
			}, {
				name: 'brackets of XML/HTML tags',
				scope: 'punctuation.definition.tag',
				settings: {
					foreground: Color.ForegroundDark2
				}
			}, {
				scope: [
					'meta.preprocessor',
					'entity.name.function.preprocessor'
				],
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: 'meta.preprocessor.string',
				settings: {
					foreground: Color.Yellow
				}
			}, {
				scope: 'meta.preprocessor.numeric',
				settings: {
					foreground: Color.GreenYellowMix
				}
			}, {
				scope: 'meta.structure.dictionary.key.python',
				settings: {
					foreground: Color.Cyan
				}
			}, {
				scope: 'meta.diff.header',
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: 'storage',
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: 'storage.type',
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: [
					'storage.modifier',
					'keyword.operator.noexcept'
				],
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: [
					'string',
					'meta.embedded.assembly'
				],
				settings: {
					foreground: Color.Yellow
				}
			}, {
				scope: 'string.tag',
				settings: {
					foreground: Color.Yellow
				}
			}, {
				scope: 'string.value',
				settings: {
					foreground: Color.Yellow
				}
			}, {
				scope: 'string.regexp',
				settings: {
					foreground: Color.Red
				}
			}, {
				name: 'String interpolation',
				scope: [
					'punctuation.definition.template-expression.begin',
					'punctuation.definition.template-expression.end',
					'punctuation.section.embedded'
				],
				settings: {
					foreground: Color.Pink
				}
			}, {
				name: 'Reset JavaScript string interpolation expression',
				scope: 'meta.template.expression',
				settings: {
					foreground: Color.Foreground
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
					foreground: Color.Cyan
				}
			}, {
				scope: 'keyword',
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: 'keyword.control',
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: 'keyword.operator',
				settings: {
					foreground: Color.Foreground
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
					foreground: Color.Pink
				}
			}, {
				scope: [
					'keyword.other.unit',
					'keyword.control.unit'
				],
				settings: {
					foreground: Color.GreenYellowMix
				}
			}, {
				scope: [
					'punctuation.section.embedded.begin.php',
					'punctuation.section.embedded.end.php'
				],
				settings: {
					foreground: Color.Pink
				}
			}, {
				name: 'php instanceof',
				scope: 'keyword.operator.type.php',
				settings: {
					foreground: Color.Pink
				}
			}, {
				scope: 'support.function.git-rebase',
				settings: {
					foreground: Color.Cyan
				}
			}, {
				scope: 'constant.sha.git-rebase',
				settings: {
					foreground: Color.GreenYellowMix
				}
			}, {
				name: 'coloring of the Java import and package identifiers',
				scope: [
					'storage.modifier.import.java',
					'variable.language.wildcard.java',
					'storage.modifier.package.java'
				],
				settings: {
					foreground: Color.Foreground
				}
			}, {
				name: 'this.self',
				scope: 'variable.language',
				settings: {
					foreground: Color.Pink
				}
			}

		];
	}

}
