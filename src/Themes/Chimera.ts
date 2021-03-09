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
					'entity.other.attribute-name.attribute.scss',
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
