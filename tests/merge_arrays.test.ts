import { merge_arrays } from "../src/merge_arrays";

describe("merge_arrays function", () => {
  it("merges three arrays and sort correctly", () => {
    const collection_1 = [1, 4, 7];
    const collection_2 = [9, 5, 2]; 
    const collection_3 = [3, 6, 8];

    const result = merge_arrays(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("case empty arrays", () => {
    expect(merge_arrays([], [], [])).toEqual([]);
    expect(merge_arrays([1, 2], [], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge_arrays([], [5, 4], [])).toEqual([4, 5]);
  });

  it("case different length arrays", () => {
    expect(merge_arrays([1,3,5], [10,8,6,4,2], [0,7,9,11]))
      .toEqual([0,1,2,3,4,5,6,7,8,9,10,11]);
  });
});