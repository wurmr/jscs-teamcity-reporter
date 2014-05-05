# jscs-teamcity-reporter [![Build Status](https://travis-ci.org/wurmr/jscs-teamcity-reporter.svg?branch=master)](https://travis-ci.org/wurmr/jscs-teamcity-reporter)


A team city reporter for use with [node-jscs](https://github.com/mdevils/node-jscs).

## Getting started

`jscs-teamcity-reporter` can be installed using npm:

```
npm install jscs-teamcity-reporter --save-dev
```

## Usage examples

To use, point `jscs` at the reporter.

### Command line

```
jscs . --reporter jscs-teamcity-reporter.js
```

### Using [grunt-jscs-checker](https://github.com/gustavohenke/grunt-jscs-checker)

```
jscs: {
    src: "path/to/files/*.js",
    options: {
        reporter: "/path/to/jscs-teamcity-reporter"
    }
}
```
