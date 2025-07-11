import { merge } from '../src/merge';

describe('merge', () => {
  test('merges three sorted arrays correctly', () => {
    const a = [1, 4, 7];
    const b = [9, 6, 3]; 
    const c = [2, 5, 8];
    const result = merge(a, b, c);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('handles arrays of different lengths', () => {
    const a = [1, 3, 5];
    const b = [2, 4];
    const c = [0, 6, 8, 10];
    const result = merge(a, b, c);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 8, 10]);
  });

  test('works with empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [2, 1], [])).toEqual([1, 2]);
    expect(merge([], [], [3, 5])).toEqual([3, 5]);
  });

  test('handles duplicates correctly', () => {
    const result = merge([1, 3], [4, 3, 1], [2, 3]);
    expect(result).toEqual([1, 1, 2, 3, 3, 3, 4]);
  });

  test('handles single element arrays', () => {
    const result = merge([1], [2], [3]);
    expect(result).toEqual([1, 2, 3]);
  });

  test('handles negative numbers correctly', () => {
    const result = merge([-3, -1, -2], [0], [2, 1]);
    expect(result).toEqual([-3, -2, -1, 0, 1, 2]);
  });

  test('handles already sorted input', () => {
    const result = merge([1, 2], [3, 4], [5, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('handles reverse sorted input', () => {
    const result = merge([3, 2, 1], [6, 5, 4], [9, 8, 7]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('handles all elements being the same', () => {
    const result = merge([1, 1], [1, 1], [1, 1]);
    expect(result).toEqual([1, 1, 1, 1, 1, 1]);
  });

  test('handles arrays with large numbers', () => {
    const result = merge([1000000, 500], [999999], [250000, 100]);
    expect(result).toEqual([100, 500, 250000, 999999, 1000000]);
  });

  test('handles large input sizes', () => {
    const a = Array.from({ length: 1000 }, (_, i) => i * 3);
    const b = Array.from({ length: 1000 }, (_, i) => i * 3 + 1);
    const c = Array.from({ length: 1000 }, (_, i) => i * 3 + 2);

    const result = merge(a, b, c);

    const expected = Array.from({ length: 3000 }, (_, i) => i);
    expect(result).toEqual(expected);
  });
});
