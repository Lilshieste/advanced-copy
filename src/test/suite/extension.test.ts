import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Squish tabs compresses tabs', () => {
		assert.strictEqual(myExtension.squishTabs('123'), '123');
		assert.strictEqual(myExtension.squishTabs('\t123'), ' 123');
		assert.strictEqual(myExtension.squishTabs('\t123\t'), ' 123 ');
		assert.strictEqual(myExtension.squishTabs('\t\t\t123\t'), ' 123 ');
		assert.strictEqual(myExtension.squishTabs('\t\t\t1\t23\t'), ' 1 23 ');
	});

	test('squishNewlines compresses tabs', () => {
		assert.strictEqual(myExtension.squishNewlines('123'), '123');
		assert.strictEqual(myExtension.squishNewlines('\n123'), ' 123');
		assert.strictEqual(myExtension.squishNewlines('\n123\n'), ' 123 ');
		assert.strictEqual(myExtension.squishNewlines('\n\n\n123\n'), ' 123 ');
		assert.strictEqual(myExtension.squishNewlines('\n\n\n1\n23\n'), ' 1 23 ');

		assert.strictEqual(myExtension.squishNewlines('123'), '123');
		assert.strictEqual(myExtension.squishNewlines('\r123'), ' 123');
		assert.strictEqual(myExtension.squishNewlines('\r123\r'), ' 123 ');
		assert.strictEqual(myExtension.squishNewlines('\r\r\r123\r'), ' 123 ');
		assert.strictEqual(myExtension.squishNewlines('\r\r\r1\n23\r'), ' 1 23 ');

		assert.strictEqual(myExtension.squishNewlines('123'), '123');
		assert.strictEqual(myExtension.squishNewlines('\r\n123'), ' 123');
		assert.strictEqual(myExtension.squishNewlines('\r\n123\r\n'), ' 123 ');
		assert.strictEqual(myExtension.squishNewlines('\r\n\r\n\r\n123\r\n'), ' 123 ');
		assert.strictEqual(myExtension.squishNewlines('\r\n\r\n\r\n1\n23\r\n'), ' 1 23 ');
	});

	test('squishWhitespace compresses whitespace', () => {
		assert.strictEqual(myExtension.squishWhitespace('123'), '123');
		assert.strictEqual(myExtension.squishWhitespace('\n123'), ' 123');
		assert.strictEqual(myExtension.squishWhitespace('\n123\t'), ' 123 ');
		assert.strictEqual(myExtension.squishWhitespace('\n\r\t123\n'), ' 123 ');
		assert.strictEqual(myExtension.squishWhitespace('\n\n\n1\n23\n'), ' 1 23 ');
	});
});
