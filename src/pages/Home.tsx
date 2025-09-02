import ProgressTracker from "@/components/ProgressTracker";

const Home = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <div className="py-content">
          <h1 className="text-6xl md:text-7xl font-light text-text-primary mb-8 lowercase leading-tight">
            learning, building, and sharing — in public.
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary font-light mb-16 max-w-3xl leading-relaxed">
            documenting my journey to master the art of learning and create projects while balancing a 9–5.
          </p>
          
          {/* Progress Trackers */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            <ProgressTracker
              label="skill challenge"
              current={6}
              total={30}
              status="active"
            />
            
            <ProgressTracker
              label="project build"
              current={2}
              total={4}
              status="in progress"
            />
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-border my-section"></div>
        
        {/* Recent Updates */}
        <div className="py-section">
          <h2 className="text-2xl font-medium text-text-primary mb-8 lowercase">
            recent updates
          </h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4 pb-4 border-b border-border">
              <span className="text-sm text-text-muted font-mono">
                jan 15, 2025
              </span>
              <span className="text-text-secondary">
                shipped new habit tracking system · day 6 of learning challenge
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 pb-4 border-b border-border">
              <span className="text-sm text-text-muted font-mono">
                jan 12, 2025
              </span>
              <span className="text-text-secondary">
                weekend build session · exploring ar/vr possibilities
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 pb-4 border-b border-border">
              <span className="text-sm text-text-muted font-mono">
                jan 08, 2025
              </span>
              <span className="text-text-secondary">
                reflection: balancing full-time work with side projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;