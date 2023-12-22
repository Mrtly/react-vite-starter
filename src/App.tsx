import { useState } from "react";
import { Button } from "@/components";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="min-h-screen w-full bg-slate-100 p-6">
      <div className="mt-10 flex flex-col items-center gap-10 text-center">
        <h1 className="text-3xl font-semibold text-teal-900">
          React + Vite + TS starter
        </h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  );
}

export default App;
