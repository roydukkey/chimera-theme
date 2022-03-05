// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import Colors from '../Colors';
import Schema from './Schema';
import type { WorkspaceConfiguration } from '../Configuration';


export default class ChimeraPlus extends Schema {

	/**
	 * Initializes a new instance of the ChimeraPlus class.
	 *
	 * @param config - The workspace configuration used to alter the theme.
	 */
	constructor (config: WorkspaceConfiguration) {
		super('Chimera+');

		this.include = './chimera.json';

		this.semanticTokenColors = {
			newOperator: Colors.purple,
			stringLiteral: Colors.yellow,
			customLiteral: Colors.orange,
			numberLiteral: Colors.greenYellowMix
		};

		this.tokenColors = [

			{
				name: 'Function declarations',
				scope: [
					'entity.name.function',
					'support.function',
					'support.constant.handlebars',
					'source.powershell variable.other.member',
					'entity.name.operator.custom-literal' // See https://en.cppreference.com/w/cpp/language/user_literal
				],
				settings: {
					foreground: Colors.orange
				}
			}, {
				name: 'Types declaration and references',
				scope: [
					'meta.return-type',
					'support.class',
					'support.type',
					'entity.name.type',
					'entity.name.namespace',
					'entity.other.attribute',
					'entity.name.scope-resolution',
					'entity.name.class',
					'storage.type.numeric.go',
					'storage.type.byte.go',
					'storage.type.boolean.go',
					'storage.type.string.go',
					'storage.type.uintptr.go',
					'storage.type.error.go',
					'storage.type.rune.go',
					'storage.type.cs',
					'storage.type.generic.cs',
					'storage.type.modifier.cs',
					'storage.type.variable.cs',
					'storage.type.annotation.java',
					'storage.type.generic.java',
					'storage.type.java',
					'storage.type.object.array.java',
					'storage.type.primitive.array.java',
					'storage.type.primitive.java',
					'storage.type.token.java',
					'storage.type.groovy',
					'storage.type.annotation.groovy',
					'storage.type.parameters.groovy',
					'storage.type.generic.groovy',
					'storage.type.object.array.groovy',
					'storage.type.primitive.array.groovy',
					'storage.type.primitive.groovy'
				],
				settings: {
					foreground: Colors.green
				}
			}, {
				name: 'Types declaration and references, TS grammar specific',
				scope: [
					'meta.type.cast.expr',
					'meta.type.new.expr',
					'support.constant.math',
					'support.constant.dom',
					'support.constant.json',
					'entity.other.inherited-class'
				],
				settings: {
					foreground: Colors.green
				}
			}, {
				name: 'Control flow / Special keywords',
				scope: [
					'keyword.control',
					'source.cpp keyword.operator.new',
					'keyword.operator.delete',
					'keyword.other.using',
					'keyword.other.operator',
					'entity.name.operator'
				],
				settings: {
					foreground: Colors.purple
				}
			}, {
				name: 'Variable and parameter name',
				scope: [
					'variable',
					'meta.definition.variable.name',
					'support.variable',
					'entity.name.variable',
					'constant.other.placeholder'
				],
				settings: {
					foreground: Colors.cyan
				}
			}

		];

		if (config.plus.contrastConstants) {
			this.tokenColors.push(

				{
					name: 'Constants and enums',
					scope: [
						'variable.other.constant',
						'variable.other.enummember'
					],
					settings: {
						foreground: Colors.cyanLight1
					}
				}

			);
		}

		this.tokenColors.push(

			{
				name: 'Object keys, TS grammar specific',
				scope: 'meta.object-literal.key',
				settings: {
					foreground: Colors.cyan
				}
			}, {
				name: 'Object key-value separator, TS grammar specific',
				scope: 'meta.object-literal.key punctuation.separator.key-value',
				settings: {
					foreground: Colors.foreground
				}
			}, {
				name: 'CSS property value',
				scope: [
					'support.constant.property-value',
					'support.constant.font-name',
					'support.constant.media-type',
					'support.constant.media',
					'constant.other.colors.rgb-value',
					'constant.other.rgb-value',
					'support.constant.color'
				],
				settings: {
					foreground: Colors.yellow
				}
			}, {
				name: 'Regular expression groups',
				scope: [
					'punctuation.definition.group.regexp',
					'punctuation.definition.group.assertion.regexp',
					'punctuation.definition.character-class.regexp',
					'punctuation.character.set.begin.regexp',
					'punctuation.character.set.end.regexp',
					'keyword.operator.negation.regexp',
					'support.other.parenthesis.regexp'
				],
				settings: {
					foreground: Colors.yellow
				}
			}, {
				scope: [
					'constant.character.character-class.regexp',
					'constant.other.character-class.set.regexp',
					'constant.other.character-class.regexp',
					'constant.character.set.regexp'
				],
				settings: {
					foreground: Colors.red
				}
			}, {
				scope: [
					'keyword.operator.or.regexp',
					'keyword.control.anchor.regexp'
				],
				settings: {
					foreground: Colors.orange
				}
			}, {
				scope: 'keyword.operator.quantifier.regexp',
				settings: {
					foreground: '#d7ba7d'
				}
			}, {
				scope: 'constant.character',
				settings: {
					foreground: Colors.pink
				}
			}, {
				scope: 'constant.character.escape',
				settings: {
					foreground: '#d7ba7d'
				}
			}, {
				scope: 'entity.name.label',
				settings: {
					foreground: '#C8C8C8'
				}
			}, {
				scope: [
					'source.css keyword',
					'source.sass keyword'
				],
				settings: {
					foreground: Colors.red
				}
			}, {
				scope: [
					'keyword.control.at-rule.function.scss',
					'keyword.control.at-rule.mixin.scss',
					'keyword.control.at-rule.include.scss',
					'keyword.control.at-rule.extend.scss'
				],
				settings: {
					foreground: Colors.green
				}
			}, {
				scope: [
					'keyword.control.debug.scss',
					'keyword.control.warn.scss',
					'keyword.control.error.scss'
				],
				settings: {
					foreground: Colors.red
				}
			}, {
				name: 'Markdown Link/Image',
				scope: [
					'markup.underline.link.markdown',
					'markup.underline.link.image.markdown',
					'punctuation.definition.metadata.markdown'
				],
				settings: {
					foreground: Colors.cyan
				}
			}, {
				name: 'Markdown Link Title/Description',
				scope: [
					'string.other.link.title.markdown',
					'string.other.link.description.markdown'
				],
				settings: {
					foreground: Colors.green
				}
			}, {
				scope: [
					'entity.other.attribute-name.handlebars',
					'variable.parameter.handlebars'
				],
				settings: {
					foreground: Colors.green
				}
			}, {
				name: 'C# Preprocessors All',
				scope: [
					'meta.preprocessor.cs',
					'meta.preprocessor.cs string'
				],
				settings: {
					foreground: Colors['meta.preprocessor.cs.yellow']
				}
			}, {
				name: 'C# Preprocessors Directives',
				scope: [
					'meta.preprocessor.cs keyword',
					'meta.preprocessor.cs punctuation.separator.hash'
				],
				settings: {
					foreground: Colors['meta.preprocessor.cs.purple']
				}
			}, {
				name: 'C# Preprocessors Operator & Parenthesis',
				scope: [
					'meta.preprocessor.cs keyword.operator',
					'meta.preprocessor.cs punctuation.parenthesis'
				],
				settings: {
					foreground: Colors['meta.preprocessor.cs.foreground']
				}
			}, {
				name: 'C# Preprocessors Symbols',
				scope: 'meta.preprocessor.cs entity.name.variable.preprocessor.symbol.cs',
				settings: {
					foreground: Colors['meta.preprocessor.cs.cyan']
				}
			}, {
				name: 'C# Preprocessors Numeric',
				scope: 'meta.preprocessor.cs constant.numeric',
				settings: {
					foreground: Colors['meta.preprocessor.cs.greenYellowMix']
				}
			}, {
				name: 'PHP Inheritance Separator',
				scope: 'punctuation.separator.inheritance.php',
				settings: {
					foreground: Colors.foreground
				}
			}, {
				name: 'PHP Using Namespace and Alias',
				scope: [
					'entity.other.alias.php',
					'support.other.namespace.php'
				],
				settings: {
					foreground: Colors.green
				}
			}

		);
	}

}
