import { render, fireEvent } from "solid-testing-library";
import "@testing-library/jest-dom";
import App from "../src/App";

describe("App Component", () => {
  test("should initialize with an empty game board", () => {
    const { container } = render(() => <App />);
    const cells = container.querySelectorAll("button");
    expect(cells.length).toBe(9);
    cells.forEach((cell) => {
      expect(cell.textContent).toBe("-");
    });
  });

  test("should allow a player to make a move", () => {
    const { container } = render(() => <App />);
    const cells = container.querySelectorAll("button");
    fireEvent.click(cells[0]);
    expect(cells[0].textContent).toBe("⭕");
  });

  test("should detect a win for player X", () => {
    const { container } = render(() => <App />);
    const cells = container.querySelectorAll("button");
    fireEvent.click(cells[0]); // O
    fireEvent.click(cells[3]); // X
    fireEvent.click(cells[1]); // O
    fireEvent.click(cells[4]); // X
    fireEvent.click(cells[2]); // O
    const status = container.querySelector("p");
    expect(status.textContent).toBe("Player ⭕ Won!");
  });

  test("should detect a draw", () => {
    const { container } = render(() => <App />);
    const cells = container.querySelectorAll("button");
    const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8];
    moves.forEach((index) => fireEvent.click(cells[index]));
    const status = container.querySelector("p");
    expect(status.textContent).toBe("Tie!");
  });
});
