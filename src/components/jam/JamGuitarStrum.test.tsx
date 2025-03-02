import { fireEvent, render, screen } from "@testing-library/react";
import JamGuitarStrum from "./JamGuitarStrum";

const testText = "Guitar Strum";
test("Guitar Strum", async () => {
  render(<JamGuitarStrum />);
  const jgsButton = await screen.findByText(testText);
  expect(jgsButton.textContent).toContain(testText);

  expect((await screen.findByTestId("jamStrum")).textContent).toHaveLength(0);
  fireEvent.click(jgsButton);
  expect((await screen.findByTestId("jamStrum")).textContent).not.toHaveLength(
    0
  );
});
