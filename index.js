#!/usr/bin/env node
'use strict';

const vm = require('vm');

module.exports = (js, stdin) => {
  const script = new vm.Script(js);

  return new Promise(resolve => {
    let data = '';
    stdin.on('data', key => {
      data += key;
    });

    stdin.on('end', () => {
      const items = data
        .split('\n')
        .filter(l => l)
        .map(l => ({
          line: l,
          parts: l
            .split(/\s/)
            .map(part => part.trim())
            .filter(part => part)
            .map(part => {
              const asNumber = Number(part);
              return isNaN(asNumber) ? part : asNumber;
            })
        }));

      const lines = items.map(item => item.line);
      const parts = items.map(item => item.parts);

      const context = vm.createContext({
        data, items, lines, parts, console
      });

      const res = script.runInContext(context);

      if (Array.isArray(res)) {
        resolve(res.join('\n'));
      } else {
        resolve(res || '');
      }
    });
  });
};
