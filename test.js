import test from 'ava';
import {systemArchitecture, systemArchitectureSync} from './index.js';

test('async', async t => {
	const result = await systemArchitecture();
	t.is(typeof result, 'string');
});

test('sync', t => {
	t.is(typeof systemArchitectureSync(), 'string');
});
