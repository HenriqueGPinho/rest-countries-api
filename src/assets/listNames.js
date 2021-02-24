function listNames(array) {
  const names = [];
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) names.push(array[i].name);
    else names.push(array[i].name, ', ');
  }
  return names;
}

export default listNames;