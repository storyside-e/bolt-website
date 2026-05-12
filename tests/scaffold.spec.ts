import { describe, it, expect } from "vitest";

describe("scaffold smoke test", () => {
  it("verifies test runner is wired", () => {
    expect(1 + 1).toBe(2);
  });
});
