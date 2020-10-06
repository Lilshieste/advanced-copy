// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const getSelectedText = () => {
	const editor = vscode.window.activeTextEditor;
	const selection = editor?.selection;

	return editor?.document.getText(selection) || '';
};

const copyText = (text: string) => {
	if(text) {
		vscode.env.clipboard.writeText(text);
	}
};

const squishAndCopy = (squish: (text: string) => string) => {
	return copyText(squish(getSelectedText()));
};

export const squishTabs = (text: string) => {
	return text.replace(/\t+/g, ' ');
};

export const squishNewlines = (text: string) => {
	return text.replace(/(\r\n)+/g, ' ').replace(/\r+/g, ' ').replace(/\n+/g, ' ');
};

export const squishWhitespace = (text: string) => {
	return text.replace(/\s+/g, ' ');
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const copySquished = vscode.commands.registerCommand('advanced-copy.copy-squished', () => {
		squishAndCopy(squishWhitespace);
	});

	const copyWithoutTabs = vscode.commands.registerCommand('advanced-copy.copy-without-tabs', () => {
		squishAndCopy(squishTabs);
	});

	const copyWithoutNewlines = vscode.commands.registerCommand('advanced-copy.copy-without-newlines', () => {
		squishAndCopy(squishNewlines);
	});

	context.subscriptions.push(copySquished);
	context.subscriptions.push(copyWithoutTabs);
	context.subscriptions.push(copyWithoutNewlines);
}

// this method is called when your extension is deactivated
export function deactivate() {}
