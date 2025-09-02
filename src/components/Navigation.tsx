import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/content", label: "content" },
    { path: "/projects", label: "projects" },
    { path: "/contact", label: "contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-lg font-medium text-text-primary hover:text-accent transition-smooth"
          >
            thecodekaizen
          </Link>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-normal underline-hover transition-smooth ${
                  location.pathname === item.path 
                    ? "text-accent" 
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;