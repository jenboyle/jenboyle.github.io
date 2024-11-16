import { relatives } from "./Relatives";

test("Relatives", async () => {
  for (let i = 0; i < relatives.length; i++) {
    if (relatives[i].key === "Ab Major") {
      expect(relatives[i].rel).toBe("F Minor");
      break;
    }
  }

  expect(relatives.length).toBe(24);
});
