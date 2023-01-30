import { screen, render } from "@testing-library/react";
import { Header } from "../../../components";

describe("testing titulo y subtitulo", () => {
  beforeEach(() => {
    render(<Header title="Challenge - Martin Sanchez" />);
  });

  it("render component", () => {
    const header = screen.getByRole("header");
    expect(header).toBeInTheDocument();
  });

  it("render correct title ", () => {
    expect(screen.getByText(/Challenge - Martin Sanchez/i)).toBeInTheDocument();
  });
});
