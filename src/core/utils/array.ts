export function splitArrayIntoChunksOfLen<T>(arr: T[], len: number) {
  var chunks = [],
    i = 0,
    n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
}
