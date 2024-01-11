![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/vantaboard.vscode-vite-asset-peek?logo=visualstudiocode)
![Visual Studio Marketplace Version (including pre-releases)](https://img.shields.io/visual-studio-marketplace/v/vantaboard.vscode-vite-asset-peek?logo=visualstudiocode)
[![Open VSX](https://img.shields.io/badge/Open%20VSX-vscode--vite--asset--peek-purple)](https://open-vsx.org/extension/pranaygp/vscode-vite-asset-peek)

# Functionality

This extension extends ejs code editing with `Go To Definition` support for Vite static asssets found in strings within the source code.

The extension supports:

- Go To: jump directly to the static asset or open it in a new editor (`F12`)

## Configuration

- `viteAssetPeek.peekFromLanguages` - A list of VSCode language names where the extension should be used.
- `viteAssetPeek.peekToExclude` - A list of file globs that filters out style files to not look for. By default, `node_modules` and `bower_components`

See editor docs for more details

- [Visual Studio Code: Goto Definition](https://code.visualstudio.com/docs/editor/editingevolved#_go-to-definition)

# Contributing

Contributions are greatly appreciated. Please fork the repository and submit a pull request.

- Shamelessly copied code from [https://github.com/pranaygp/vscode-css-peek](https://github.com/pranaygp/vscode-css-peek)
