import { render, screen } from "@testing-library/react"
import { expect } from "vitest"
import { Example } from "../routes/example"

describe("Example", () => {
  it("renders the Example component", () => {
    render(<Example />)

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Example page",
    })

    expect(heading).toBeVisible()
  })
})
