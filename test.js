import stream from 'stream';
import test from 'ava';
import jsShell from '.';

const exec = async (js, input) => {
  const stdin = new stream.Writable();
  const resultPromise = jsShell(js, stdin);
  stdin.emit('data', input);
  stdin.emit('end');
  const result = await resultPromise;
  return result;
};

test('data contains whole input', async t => {
  const result = await exec('data', 'Hello, world!');
  t.is('Hello, world!', result);
});

test('lines contains all lines', async t => {
  const input = 'Hello\nworld!';
  let result = await exec('lines[1]', input);
  t.is('world!', result);
  result = await exec('lines[0]', input);
  t.is('Hello', result);
});

test('items have lines', async t => {
  const input = 'Hello\nworld!';
  let result = await exec('items[1].line', input);
  t.is('world!', result);
  result = await exec('items[0].line', input);
  t.is('Hello', result);
});

test('items have parts', async t => {
  const input = 'Hello\tworld!';
  let result = await exec('items[0].parts[1]', input);
  t.is('world!', result);
  result = await exec('items[0].parts[0]', input);
  t.is('Hello', result);
});
