import { render, screen } from "@testing-library/react";
import JamKey from "./JamKey";

const testText = "Key Generator";
test("Jam Key", async () => {
  render(<JamKey />);
  const jkButton = await screen.findByText(testText);
  expect(jkButton.textContent).toContain(testText);
});

//jamKeyDiv
