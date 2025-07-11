export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const merged = collection_1.concat(collection_2, collection_3);
  return mergeSort(merged);
}

// example [9, 5, 1, 8, 6, 2, 4] -> [9, 5, 1] [8, 6, 2, 4]
// left [9, 5, 1] -> [9] [5, 1] -> [9] [1, 5] -> [1, 5, 9]
// right [8, 6, 2, 4] -> [8] [6, 2, 4] -> [8] [2, 6, 4] -> [2, 4, 6, 8]
// left [1, 5, 9] right [2, 4, 6, 8] -> [1, 2, 4, 5, 6, 8, 9]
// O(n log n) life good, yay, ._.)b
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return mergeTwoSortedArrays(left, right);
}

function mergeTwoSortedArrays(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
