import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/svelte";
import Coffee from "../lib/Coffee.svelte";

describe("Coffee.svelte", () => {
  // TODO: @testing-library/svelte claims to add this automatically but it doesn't work without explicit afterEach
  afterEach(() => cleanup());

  beforeEach(() => {
    render(Coffee);
  });

  it("mounts", () => {
    expect(screen.getAllByRole("img")).toHaveLength(8);
  });

  it("shows ingredients info", async () => {
    await fireEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getByText("Water")).toBeInTheDocument();
    expect(screen.getByText("Coffee")).toBeInTheDocument();
  });
});
