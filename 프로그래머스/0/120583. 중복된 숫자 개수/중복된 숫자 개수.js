function solution(array, n) {
  let ans = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) ans++;
  };
  return ans;
}