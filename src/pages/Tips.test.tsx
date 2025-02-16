import { render, screen } from "@testing-library/react";
import Tips from "./Tips";
import { MemoryRouter } from "react-router-dom";

const tipsPageText = "Solo";
test("Tips Page", async () => {
  render(
    <MemoryRouter>
      <Tips />
    </MemoryRouter>
  );
  expect((await screen.findByText(tipsPageText)).textContent).toContain(
    tipsPageText
  );
});
