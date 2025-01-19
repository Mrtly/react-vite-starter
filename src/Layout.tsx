import { Link } from "@radix-ui/themes";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-screen">
      <header className="h-20 border-b-2 dark:border-gray-800 shadow w-full flex items-center p-6">
        <Link href="/" className="text-3xl font-semibold">
          React + Vite + TS starter
        </Link>
      </header>
      <main className="p-6 min-h-[calc(100vh-80px)] w-screen">{children}</main>
    </div>
  );
};

export default Layout;
