import { render, screen } from "@testing-library/react"
import { expect } from "vitest"
import { Home } from "../routes/index"

// mock window.matchMedia for tests (this is from next-theme dark mode)
// global.matchMedia =
//   global.matchMedia ||
//   function () {
//     return {
//       matches: false,
//       addListener: () => {},
//       removeListener: () => {},
//     }
//   }

describe("index / Home component", () => {
  it("renders the Home component", () => {
    render(<Home />)

    const heading = screen.getByRole("heading", { name: "Home" })

    expect(heading).toBeVisible()

    // screen.debug() //useful, prints out the jsx in the terminal
  })
})
