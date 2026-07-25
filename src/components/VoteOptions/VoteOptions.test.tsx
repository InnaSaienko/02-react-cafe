import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import VoteOptions from "./VoteOptions";

describe("VoteOptions", () => {
  it("calls onVote with the correct vote type", async () => {
    const user = userEvent.setup();
    const onVote = vi.fn();
    const onReset = vi.fn();

    render(<VoteOptions onVote={onVote} onReset={onReset} />);

    await user.click(screen.getByRole("button", { name: /good/i }));

    expect(onVote).toHaveBeenCalledWith("good");
    expect(onVote).toHaveBeenCalledTimes(1);
  });

  it("calls onReset when Reset button is clicked", async () => {
    const user = userEvent.setup();
    const onVote = vi.fn();
    const onReset = vi.fn();

    render(<VoteOptions onVote={onVote} onReset={onReset} />);

    await user.click(screen.getByRole("button", { name: /reset/i }));

    expect(onReset).toHaveBeenCalledTimes(1);
  });
});