# Changelog

<!-- The order of list items should be: Critical/Fixes, New, Update, Remove, Underpinnings -->
<!-- ## [UNRELEASED](https://github.com/roydukkey/chimera-theme/compare/v0.14.1...master) -->

## [UNRELEASED](https://github.com/roydukkey/chimera-theme/compare/v0.14.1...master)

* Add sponsor URL

## [0.14.1](https://github.com/roydukkey/chimera-theme/compare/v0.14.0...v0.14.1)

* Fix black integrated terminal color

## [0.14.0](https://github.com/roydukkey/chimera-theme/compare/v0.12.0...v0.14.0)

* Improves find match colors
* Implement bracket pair colorization
* Implement merge conflict colors`
* Implement integrated terminal colors
* Add `button.secondaryBackground`, `editorBracketMatch.border`, and `editor.foldBackground`

## [0.12.0](https://github.com/roydukkey/chimera-theme/compare/v0.10.0...v0.12.0)

* Add strike through for markdown following Dark ([@vscode/#43504](https://github.com/microsoft/vscode/issues/43504))
* Remove `meta.return-type` following Dark+ ([@vscode/#142672](https://github.com/microsoft/vscode/issues/142672))

## [0.10.0](https://github.com/roydukkey/chimera-theme/compare/v0.8.0...v0.10.0)

* Clean up and fix web release
* Increase `editorCodeLens.foreground` and `gitlens.trailingLineForegroundColor` ([#28](https://github.com/roydukkey/chimera-theme/issues/28))

## [0.8.0](https://github.com/roydukkey/chimera-theme/compare/v0.7.0...v0.8.0)

* Requires at least VS Code 1.64.0 or greater
* Rewrite extension to compile web release
* Remove dependencies on `color` and `color-string` (now dev dependencies)
* Improve development debugging and add web debugging
* Replace `fs` usage and custom config with standard vscode library

## [0.7.0](https://github.com/roydukkey/chimera-theme/compare/v0.6.0...v0.7.0)

* Begin ~~annoying~~ [Pre-Release version scheme](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#prerelease-extensions)
* No more Pre-Release version will be logged after this version

## [0.6.0](https://github.com/roydukkey/chimera-theme/compare/v0.5.0...v0.6.0)

* Add `editorRuler.foreground`
* Change activation event from `*` to `onStartupFinished`

## [0.5.0](https://github.com/roydukkey/chimera-theme/compare/v0.4.0...v0.5.0)

* Fix `list.activeSelectionIconForeground`
* Normalize SCSS attributes with CSS/LESS/SASS ([#19](https://github.com/roydukkey/chimera-theme/issues/19))
* Configure decision on untrusted workspaces support ([#25](https://github.com/roydukkey/chimera-theme/issues/25))
* Configure inlay hints ([#26](https://github.com/roydukkey/chimera-theme/issues/26))
* Add `notebook.selectedCellBackground` ([#21](https://github.com/roydukkey/chimera-theme/issues/21))
* Add `list.dropBackground`
* Add colorization of string placeholders
* Merge defaults into regular theme ([#20](https://github.com/roydukkey/chimera-theme/issues/20))
* Update several internals

## [0.4.0](https://github.com/roydukkey/chimera-theme/compare/v0.3.0...v0.4.0)

* Make Chimera+ the default contribute
* Support editor selection
* Support word highlighting
* Support find matches
* Support hover highlight
* Support active foreground for editor link
* Support last pinned tab border
* Support tree’s indent guide stroke
* Support diff editor's diagonal fill
* Support PowerShell members ([#13](https://github.com/roydukkey/chimera-theme/issues/13))
* Support [Semantic Highlighting](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide) ([#16](https://github.com/roydukkey/chimera-theme/issues/16))
* Contribute configuration toggle for contrasting constants and enum members from variables and parameters ([#15](https://github.com/roydukkey/chimera-theme/issues/15))
* Separate colon (:) from the style of object keys ([#6](https://github.com/roydukkey/chimera-theme/issues/6))
* Update support and grammar for CPP members ([#12](https://github.com/roydukkey/chimera-theme/issues/12))
* Update sidebar section header colors ([#11](https://github.com/roydukkey/chimera-theme/issues/11))
* Update line highlight border to use current line color
* Lighten panel and picker groups' border
* Decrease opacity of scrollbar slider
* Refactor from JavaScript to TypeScript
* Separate normal and development dependencies
* Add linting for spelling and TypeScript
* Add development extension recommendations

## [0.3.0](https://github.com/roydukkey/chimera-theme/compare/v0.2.0...v0.3.0)

* Add 'dracula' keyword
* Conforms sass units to css ([#4](https://github.com/roydukkey/chimera-theme/issues/4))
* Configures C# preprocessor directives ([#5](https://github.com/roydukkey/chimera-theme/issues/5))
* Improve namespace and using PHP statements
* Add launch settings for [Testing Extensions](https://code.visualstudio.com/api/working-with-extensions/testing-extension)

## [0.2.0](https://github.com/roydukkey/chimera-theme/compare/v0.1.0...v0.2.0)

* Add icon
* Support render whitespace ([#1](https://github.com/roydukkey/chimera-theme/issues/1))
* Lighten the status bar for workspaces
* Support status bar while debugging and no folder ([#2](https://github.com/roydukkey/chimera-theme/issues/2))
* Fix spelling

## 0.1.0

* Initial release!
