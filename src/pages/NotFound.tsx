import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Link } from "@radix-ui/themes";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="w-full flex flex-col items-center py-10 gap-10">
      <h1 className="font-semibold text-2xl">Dang! </h1>
      <h3 className="font-semibold text-lg">
        Page not found {isRouteErrorResponse(error) && <>({error.status})</>}
      </h3>
      <Link href="/">Home</Link>
    </div>
  );
};

export default NotFound;
