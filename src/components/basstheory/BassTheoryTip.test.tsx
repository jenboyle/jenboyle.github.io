import { fireEvent, render, screen } from "@testing-library/react";
import BassTheoryTip from "./BassTheoryTip";

test("Tip toggles and shows tip", async () => {
  render(<BassTheoryTip tip="Test tip"></BassTheoryTip>);

  const tip = await screen.findByTestId("bassTheoryTip");
  expect(tip).toBeDefined();

  fireEvent.click(tip);
  const firstclick = await screen.findByText("Test tip");
  expect(firstclick.textContent).toContain("Test tip");

  fireEvent.click(tip);
  const secondclick = await screen.findByTestId("bassTheoryTip");
  expect(secondclick.textContent).not.toContain("Test tip");
});
