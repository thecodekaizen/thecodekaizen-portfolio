import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-light text-text-primary mb-8 lowercase">404</h1>
        <p className="text-xl text-text-secondary mb-8 lowercase">
          oops! page not found
        </p>
        <a 
          href="/" 
          className="text-accent hover:text-accent-light underline-hover lowercase transition-smooth"
        >
          return to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
