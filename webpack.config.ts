import type { Configuration } from 'webpack';
import { ProvidePlugin } from 'webpack';
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
			// eslint-disable-next-line @typescript-eslint/naming-convention
			Colors: path.resolve(__dirname, './dist/colors.json')
		},
		fallback: {
			// Webpack 5 no longer polyfills Node.js core modules automatically.
			// see https://webpack.js.org/configuration/resolve/#resolvefallback
			// for the list of Node.js core module polyfills.
			// color: require.resolve('color'),
			// 'color-string': require.resolve('color-string')
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
