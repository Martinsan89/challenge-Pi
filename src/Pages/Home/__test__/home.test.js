import { render, cleanup, screen, waitFor } from "@testing-library/react";
import { Home } from "../../../Pages";
import { Provider } from "react-redux";
import { store } from "../../../features/store";
import axios from "axios";

jest.mock("axios");

describe("testing Home page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
  afterEach(cleanup);

  it("render loading", () => {
    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
  });

  it("render axios get card characters", async () => {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://swapi.dev/api/people",
        expect.anything()
      );
    });
  });
});
