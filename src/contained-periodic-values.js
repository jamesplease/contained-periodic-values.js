import nearestPeriodicValue from 'nearest-periodic-value';

function containedPeriodicValues(start, end, value, period) {
  var nearest = nearestPeriodicValue(start, value, period);

  // Ensure that the nearest value is in front of the start
  // of the interval
  if (nearest - start < 0) {
    nearest += period;
  }

  // If we can't even reach the first value, then it is 0
  if ((nearest - start) > (end - start)) {
    return 0;
  }

  // Otherwise, we have reached it, so we start with 1.
  // Then we add one for every full period in our interval
  else {
    return 1 + parseInt((end - nearest) / period);
  }
}

export default containedPeriodicValues;
