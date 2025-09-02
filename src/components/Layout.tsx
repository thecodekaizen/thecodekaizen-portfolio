import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <footer className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-text-muted text-center sm:text-left">
            <span className="lowercase">built in public · thecodekaizen · © 2025</span>
            <span className="lowercase">continuous improvement</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;