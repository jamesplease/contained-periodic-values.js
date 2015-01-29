(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["nearest-periodic-value"], factory);
  } else if (typeof exports !== "undefined") {
    var nearestPeriodicValue = require("nearest-periodic-value");
    module.exports = factory(nearestPeriodicValue);
  } else {
    root.containedPeriodicValues = factory(root.nearestPeriodicValue);
  }
})(this, function (nearestPeriodicValue) {
  "use strict";

  var containedPeriodicValues = function (start, end, value, period) {
    var nearest = nearestPeriodicValue(start, value, period);

    // Ensure that the nearest value is in front of the start
    // of the interval
    if (nearest - start < 0) {
      nearest += period;
    }

    // If we can't even reach the first value, then it is 0
    if (nearest - start > end - start) {
      return 0;
    }

    // Otherwise, we have reached it, so we start with 1.
    // Then we add one for every full period in our interval
    else {
      return 1 + parseInt((end - nearest) / period);
    }
  };




  return containedPeriodicValues;
});
//# sourceMappingURL=contained-periodic-values.js.map