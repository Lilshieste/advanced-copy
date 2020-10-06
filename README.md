# advanced-copy README

Defines commands for copying selected text to the clipboard after performing minor transformations.

This extension only modifies a copy of the selected text; no changes are made to the selection in the editor.

## Features

Adds the following commands to VS Code:

`advanced-copy.copy-squished (Copy selected text, compressing all whitespace)`
- Copies the selected text with all whitespace characters (\s) replaced with spaces.

Text:
```
The quick brown
    fox jumps over
        the lazy

dog.
```
Copied:
```
The quick brown fox jumps over the lazy dog.
```

`advanced-copy.copy-without-newlines (Copy selected text, compressing newline characters)`
- Copies the selected text with all newline characters (\r\n, \r, \n) replaced with spaces.

Text:
```
The quick brown
    fox jumps over
        the lazy

dog.
```
Copied:
```
The quick brown fox jumps over      the lazy dog.
```

`advanced-copy.copy-without-tabs (Copy selected text, compressing tab characters)`
- Copies the selected text with all tab characters (\t) replaced with spaces.

Text:
```
The quick brown
    fox jumps over
        the lazy

dog.
```
Copied:
```
The quick brown
fox jumps over
the lazy

dog.
```

## Requirements

None

## Extension Settings

None

## Known Issues

None (yet)

## Release Notes

### 1.0.0

Initial release