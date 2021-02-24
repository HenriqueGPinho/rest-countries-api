function pushIfDifferent(item, array) {
  if (!array.includes(item) && item !== '') {
    array.push(item);
  }
}

export default pushIfDifferent;