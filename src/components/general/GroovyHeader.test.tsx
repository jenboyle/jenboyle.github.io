import { render, screen } from "@testing-library/react";
import GroovyHeader from "./GroovyHeader";

const testText = "Groovy Header";
test("GroovyHeader", async () => {
  render(<GroovyHeader>{testText}</GroovyHeader>);
  expect((await screen.findByText(testText)).textContent).toContain(testText);
});
