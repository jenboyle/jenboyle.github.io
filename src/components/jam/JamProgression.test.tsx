import { fireEvent, render, screen } from "@testing-library/react";
import JamProgression from "./JamProgression";

const testText = "Guitar Progression";
test("Guitar Progression", async () => {
  render(<JamProgression />);
  const jpButton = await screen.findByText(testText);
  expect(jpButton.textContent).toContain(testText);

  expect((await screen.findByTestId("jamProgDiv")).textContent).toHaveLength(0);
  fireEvent.click(jpButton);
  expect(
    (await screen.findByTestId("jamProgDiv")).textContent
  ).not.toHaveLength(0);
});
