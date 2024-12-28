type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-screen">
      <header className="h-20 border-b-2 shadow w-full flex items-center p-6">
        <a href="/">
          <h1 className="text-3xl font-semibold">React + Vite + TS starter</h1>
        </a>
      </header>
      <main className="p-6 min-h-[calc(100vh-80px)] w-screen">{children}</main>
    </div>
  );
};

export default Layout;
