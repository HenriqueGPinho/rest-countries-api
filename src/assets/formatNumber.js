function formatNumber(number) {
  let result = number.toString().split('').reverse();

  for (let i = 0; i < result.length - 1; i++) {
    if ((i + 1) % 3 === 0) result[i] = ',' + result[i];
  } 

  return result.reverse().join('');
}

export default formatNumber;