import { useState } from "react"
import { Button, Link } from "@radix-ui/themes"
import { createFileRoute } from "@tanstack/react-router"

const Home = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-lg">Home</h1>
      <Button
        className="w-fit cursor-pointer"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </Button>
      <Link className="w-fit" href="/example">
        Example page
      </Link>
    </div>
  )
}

export { Home } //export for testing

export const Route = createFileRoute("/")({
  component: Home,
})
