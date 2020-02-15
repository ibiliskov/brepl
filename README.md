# bREPL

![License](https://img.shields.io/badge/license-MIT-green)
![GitHub issues](https://img.shields.io/github/issues-raw/ibiliskov/brepl)
![GitHub package.json version](https://img.shields.io/github/package-json/v/ibiliskov/brepl)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

bREPL is Node.js repl that has few libraries and utility functions added to context.

## Installing

Using npm:

```
$ npm install -g brepl
```
Using yarn:

```
$ yarn global add brepl
```

## Usage

Run 
```
brepl
```
in terminal

## How it works

Uses built in Node.js Repl mode, but extends context with following libraries

- [Axios](https://github.com/axios/axios)
- [Moment](https://momentjs.com/)
- [Lodash](https://lodash.com/)
- [fs-extra](https://github.com/jprichardson/node-fs-extra)

All other default Node.js modules are auto loaded and available in the context.

### Injected context

```
{
  __,        // Lodash
  lo,        // Lodash
  axios,     // Axios
  moment,    // Moment
  fse,       // fs-extra
  saveFile,  // fse.writeFileSync
  loadJson,  // fse.readJsonSync
  loadFile,  // fse.readFileSync
  sf,        // saveFile
  lj,        // loadJson
  lf,        // loadFile
}
```

### Lodash and _

The result of the most recently evaluated expression will be assigned to to the special variable `_` (underscore).

```
bREPL > [ 'a', 'b', 'c' ]
[ 'a', 'b', 'c' ]
bREPL > _.length
3
```

So Lodash is available in context through 2 variables: `lo` and `__` (double underscore)

## How to contribute

Contributions, issues and feature requests are welcome.

1. File an issue to notify the maintainers about what you're working on.
2. Fork the repo, develop and test your code changes, add docs.
   Make sure that your commit messages clearly describe the changes.
3. Submit Pull Request with comprehensive description of changes

### Install

After clone run `npm install` to get npm packages.

### Style guide

There are Prettier and ESLint configs in root folder, most editors should support them out of the box.

### To Do

- [ ] Write help output

## License

Released under the [MIT license](./LICENSE).
