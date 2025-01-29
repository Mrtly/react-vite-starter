import { render, screen } from "@testing-library/react"
import { expect } from "vitest"
import { NotFound } from "../components/NotFound"

describe("NotFound component", () => {
  it("renders the NotFound component", () => {
    render(<NotFound />)

    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Page not found",
    })

    expect(heading).toBeVisible()
  })
})
