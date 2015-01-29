# contained-periodic-values.js
[![Travis build status](http://img.shields.io/travis/jmeas/contained-periodic-values.js.svg?style=flat)](https://travis-ci.org/jmeas/contained-periodic-values.js)
[![Code Climate](https://codeclimate.com/github/jmeas/contained-periodic-values.js/badges/gpa.svg)](https://codeclimate.com/github/jmeas/contained-periodic-values.js)
[![Test Coverage](https://codeclimate.com/github/jmeas/contained-periodic-values.js/badges/coverage.svg)](https://codeclimate.com/github/jmeas/contained-periodic-values.js)
[![Dependency Status](https://david-dm.org/jmeas/contained-periodic-values.js.svg)](https://david-dm.org/jmeas/contained-periodic-values.js) 
[![devDependency Status](https://david-dm.org/jmeas/contained-periodic-values.js/dev-status.svg)](https://david-dm.org/jmeas/contained-periodic-values.js#info=devDependencies)

Find the values of a discrete periodic function contained in an interval.

### What are discrete periodic functions?

Periodic functions are functions that repeat. Discrete functions are functions whose values do not
connect. An example of a discrete periodic function is the function of "Wednesdays" on a calendar.
Wednesdays are discrete values along a timeline, and they repeat every 7 days.

### Terminology

The members of a periodic function's output are the "values." A single member is a "value."

The interval that the function repeats along is the "period."

A "point" is any value in the domain of the function.

### API

##### `containedPeriodicValues(start, end, value, period)`

Find the 

Find the nearest value to `point`. Supply a `value` from the codomain of the function, and its `period`.
