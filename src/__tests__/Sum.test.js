import { sum } from "../components/Sum";

test("test sum", () => {
  const result = sum(3, 4);

  //assertion
  expect(result).toBe(7);
});
