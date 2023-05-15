import { render, screen } from "@testing-library/react";
import Header from "../../src/components/post/header";
import "@testing-library/jest-dom/extend-expect";

describe("Header", () => {
  it("renders a post header", () => {
    const props = {
      avatar: "/example.img",
      displayName: "temporary",
      acct: "example@example.org",
      createdAt: new Date().toISOString(),
      replyCount: 2,
    };

    render(<Header {...props} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("alt");
    expect(screen.getByText(props.displayName)).toBeInTheDocument();
    expect(
      screen.getByText(`replies (${props.replyCount})`)
    ).toBeInTheDocument();
  });
});
