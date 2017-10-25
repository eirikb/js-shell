# js-shell (js)[![Build Status](https://travis-ci.org/eirikb/js-shell.svg?branch=master)](https://travis-ci.org/eirikb/js-shell)

> Pipe terminal commands into JavaScript


## Install

```
$ npm i -g js-shell
```

## Usage

```bash
$ ls | js 'lines.map(line => line.toUpperCase())' 
```

## Examples

Find all files larger than 10K
![Imgur](https://i.imgur.com/UiT0REB.gif)

Parse JSON (similar to [jq](https://stedolan.github.io/jq))
![Imgur](https://i.imgur.com/X16kJmk.gifv)

Stringify JSON (similar to [jo](https://github.com/jpmens/jo))
![Imgur](https://i.imgur.com/MncIWuI.gifv)



## Related

Similar to [iostreamer-X/Awkward](https://github.com/iostreamer-X/Awkward) except this is meant to be
used between pipes of other commands, e.g., while doing bash scripting.

## License

MIT © Eirik Brandtzæg