import { CardCharacter } from "../../../components";
import { render, screen } from "@testing-library/react";

describe("testing card character", () => {
  beforeEach(() => {
    render(<CardCharacter />);
  });

  it("render component", () => {
    const cardCharacter = screen.getByRole("cardCharacter");
    expect(cardCharacter).toBeInTheDocument();
  });
});
