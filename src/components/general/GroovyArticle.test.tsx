import { render, screen } from "@testing-library/react";
import GroovyArticle from "./GroovyArticle";

const testText = "Groovy Article";
test("GroovyArticle without className", async () => {
  render(<GroovyArticle>{testText}</GroovyArticle>);
  expect((await screen.findByText(testText)).textContent).toContain(testText);
});

test("GroovyArticle with className", async () => {
  render(<GroovyArticle customStyles="test">{testText}</GroovyArticle>);
  expect((await screen.findByText(testText)).textContent).toContain(testText);
});
