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
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between text-sm text-text-muted">
            <span className="lowercase">built in public · thecodekaizen · © 2025</span>
            <span className="lowercase">continuous improvement</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;