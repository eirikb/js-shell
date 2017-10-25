#!/usr/bin/env node
'use strict';

const jsShell = require('./index');

const js = process.argv[2];

if (!js) {
  console.log('Missing required JavaScript as first argument');
  console.log(`  Example: ls | js 'lines.map(line => line.toUpperCase())'`);
  process.exit(1);
}

const stdin = process.stdin;
stdin.resume();
stdin.setEncoding('utf8');

jsShell(js, stdin).then(res => console.log(res));
