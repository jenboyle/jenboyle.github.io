import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cubase from "./Cubase";

const cubasePageText = "Tools";
test("Cubase Page", async () => {
  render(
    <MemoryRouter>
      <Cubase />
    </MemoryRouter>
  );
  expect((await screen.findAllByText(cubasePageText))[0].textContent).toContain(
    cubasePageText
  );
});
