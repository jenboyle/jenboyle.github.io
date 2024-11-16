import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Percussion from "./Percussion";

const percussionPageText = "Cabasa";
test("Percussion Page", async () => {
  render(
    <MemoryRouter>
      <Percussion />
    </MemoryRouter>
  );
  expect((await screen.findByText(percussionPageText)).textContent).toContain(
    percussionPageText
  );
});
