(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['nearest-periodic-value'], factory);
  } else if (typeof exports !== 'undefined') {
    var nearestPeriodicValue = require('nearest-periodic-value');
    module.exports = factory(nearestPeriodicValue);
  } else {
    root.<%= exportVarName %> = factory(root.nearestPeriodicValue);
  }
})(this, function(nearestPeriodicValue) {
  'use strict';

  // @include ./contained-periodic-values.js
  
  return <%= exportVarName %>;
});
