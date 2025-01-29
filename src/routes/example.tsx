import { Link, Heading } from "@radix-ui/themes"
import { createFileRoute } from "@tanstack/react-router"

const Example = () => {
  return (
    <div className="flex flex-col gap-10">
      <Heading as="h2" className="font-semibold text-2xl">
        Example page
      </Heading>
      <Link href="/">Home</Link>
    </div>
  )
}

export { Example }

export const Route = createFileRoute("/example")({
  component: Example,
})
