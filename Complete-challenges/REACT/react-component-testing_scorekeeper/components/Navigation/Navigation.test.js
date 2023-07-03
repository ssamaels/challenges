import { render, screen } from "@testing-library/react";
import Navigation from ".";
import { userEvent } from "@testing-library/user-event/dist/types/setup";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", async () => {
  render(
    <Navigation
      players={[
        { name: "John", score: 2, id: "xyz" },
        { name: "Jane", score: 1, id: "abc" },
      ]}
    />
  );

  const button1 = screen.getByRole("button", { name: /play/i });
  await userEvent.click(button1);

  const button2 = screen.getByRole("button", { name: /history/i });
  await userEvent.click(button2);

  expect(button1).toBeInTheDocument();
  expect(button2).toBeInTheDocument();
});
