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

## Variables

These are the variables passed into the context of the script:  
`data`: One string of all the incoming data.  
`items`: Incoming data split into array from newlines, then each line contains `line` (whole line) and `parts` which is the line split by whitespace.  
`lines`: Incoming data split into array from newlines.
`parts`: Incoming data split into array from newlines, then each line is split by whitespace (two-dimensional array).
`console`: Directly mapped `console` for convenience, e.g., `lines.forEach(line => console.log(line))`.

## Examples

Find all files larger than 10K
![Imgur](https://i.imgur.com/UiT0REB.gif)

Parse JSON (similar to [jq](https://stedolan.github.io/jq))
![Imgur](https://i.imgur.com/X16kJmk.gif)

Stringify JSON (similar to [jo](https://github.com/jpmens/jo))
![Imgur](https://i.imgur.com/MncIWuI.gif)



## Related

Similar to [iostreamer-X/Awkward](https://github.com/iostreamer-X/Awkward) except this is meant to be
used between pipes of other commands, e.g., while doing bash scripting.

## License

MIT © Eirik Brandtzæg