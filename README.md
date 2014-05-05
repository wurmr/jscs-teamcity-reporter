# jscs-teamcity-reporter

[![Build Status](https://travis-ci.org/wurmr/jscs-teamcity-reporter.svg?branch=master)](https://travis-ci.org/wurmr/jscs-teamcity-reporter) [![Dependencies](https://david-dm.org/wurmr/jscs-teamcity-reporter.svg)](https://david-dm.org/wurmr/jscs-teamcity-reporter#info=dependencies&view=table) [![DevDependecies](https://david-dm.org/wurmr/jscs-teamcity-reporter/dev-status.svg)](https://david-dm.org/wurmr/jscs-teamcity-reporter#info=devDependencies&view=table)


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
