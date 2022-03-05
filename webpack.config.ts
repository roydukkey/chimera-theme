import type { Configuration } from 'webpack';
import { BannerPlugin, ProvidePlugin } from 'webpack';
import { author, displayName, name, repository, version } from './package.json';
import * as path from 'path';


const webExtensionConfig: Configuration = {
	mode: 'none', // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
	target: 'webworker', // extensions run in a webworker context
	entry: {
		'extension': './src/extension.ts'
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, './dist'),
		libraryTarget: 'commonjs',
		devtoolModuleFilenameTemplate: '../../[resource-path]'
	},
	resolve: {
		mainFields: ['browser', 'module', 'main'], // look for `browser` entry point in imported node modules
		extensions: ['.ts', '.js'], // support ts-files and js-files
		alias: {
			// provides alternate implementation for node module and source files
			'../Colors': path.resolve(__dirname, './dist/colors.json')
		}
	},
	module: {
		rules: [{
			test: /\.ts$/,
			exclude: /node_modules/,
			use: [{
				loader: 'ts-loader'
			}]
		}]
	},
	plugins: [
		new BannerPlugin([
			`${displayName} v${version}`,
			`(c) ${author.name}`,
			`${repository.url.replace(/\.git$/, `/blob/v${version}/LICENSE`)}`
		].join(' | ')),
		new ProvidePlugin({
			process: 'process/browser' // provide a shim for the global `process` variable
		})
	],
	externals: {
		'vscode': 'commonjs vscode' // ignored because it doesn't exist
	},
	performance: {
		hints: false
	},
	devtool: 'nosources-source-map', // create a source map that points to the original source file
	infrastructureLogging: {
		level: 'log' // enables logging required for problem matchers
	}
};

module.exports = [ webExtensionConfig ];
