import { allKeys } from "./allKeys";

test("Allkeys", async () => {
  expect(allKeys[0].keys[0].key).toBe("Cb Major");
  expect(allKeys[0].keys.length).toBe(30);
});
