import { type LayoutProps } from "./Layout.types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gray-800 p-4 text-white">Header</header>
      <main className="grid flex-1 grid-cols-1 gap-4 p-4 md:grid-cols-12">
        {children}
      </main>
      <footer className="bg-gray-800 p-4 text-white">Footer</footer>
    </div>
  );
};
