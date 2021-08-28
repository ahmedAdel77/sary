export function sortByPower(b, a) {
  if (a.rate < b.rate) {
    return -1;
  }
  if (a.rate > b.rate) {
    return 1;
  }
  return 0;
}
