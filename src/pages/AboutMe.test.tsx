import { render, screen } from "@testing-library/react";
import AboutMe from "./AboutMe";
import { MemoryRouter } from "react-router-dom";

const aboutMePageText = "Qualifications";
test("AboutMe Page", async () => {
  render(
    <MemoryRouter>
      <AboutMe />
    </MemoryRouter>
  );
  expect((await screen.findByText(aboutMePageText)).textContent).toContain(
    aboutMePageText
  );
});
