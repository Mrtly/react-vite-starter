import { Link } from "@radix-ui/themes"

const NotFound = () => {
  return (
    <div className="w-full flex flex-col items-center py-10 gap-10">
      <h1 className="font-semibold text-2xl">Dang! </h1>
      <h3 className="font-semibold text-lg">Page not found</h3>
      <Link href="/">← Home</Link>
    </div>
  )
}

export { NotFound }
