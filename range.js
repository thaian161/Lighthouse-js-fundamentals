function range(start, end, step) {
  var array = [];
  if (
    start === undefined ||
    end === undefined ||
    step === undefined ||
    start > end ||
    step < 0
  ) {
    array = [];
  } else {
    let counter = start;
    while (counter <= end) {
      array.push(counter);
      counter += step;
    }
  }
  return array;
}
