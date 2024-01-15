import { useState } from "react";
import { Button } from "@/components";
import { Link } from "@/components/Link";

const Home = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col gap-10">
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Link href="/example">Example page</Link>
    </div>
  );
};

export default Home;
