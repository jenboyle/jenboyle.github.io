import { fireEvent, render, screen } from "@testing-library/react";
import JamSpice from "./JamSpice";

const testText = "Spice It Up";
test("Jam Spice", async () => {
  render(<JamSpice />);
  const jsButton = await screen.findByText(testText);
  expect(jsButton.textContent).toContain(testText);

  expect((await screen.findByTestId("jamSpiceDiv")).textContent).toHaveLength(
    0
  );
  fireEvent.click(jsButton);
  expect(
    (await screen.findByTestId("jamSpiceDiv")).textContent
  ).not.toHaveLength(0);
});
