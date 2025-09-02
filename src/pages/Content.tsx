import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="py-content">
          <h1 className="text-5xl md:text-6xl font-light text-text-primary mb-8 lowercase leading-tight">
            content
          </h1>
          
          <p className="text-xl text-text-secondary font-light mb-16 max-w-2xl">
            updates · logs · progress
          </p>
        </div>
        
        {/* Content Channels */}
        <div className="grid md:grid-cols-2 gap-8 mb-section">
          <Link 
            to="/content/lifeoutsidethecode"
            className="group bg-surface border border-border rounded p-8 hover:bg-hover transition-smooth"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🌱</span>
              <h2 className="text-2xl font-medium text-text-primary lowercase">
                lifeoutsidethecode
              </h2>
            </div>
            <p className="text-text-secondary mb-4">
              habit/skill challenges, personal growth logs
            </p>
            <span className="text-sm text-accent group-hover:underline">
              view updates →
            </span>
          </Link>
          
          <Link 
            to="/content/builtbytheweekends"
            className="group bg-surface border border-border rounded p-8 hover:bg-hover transition-smooth"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚡</span>
              <h2 className="text-2xl font-medium text-text-primary lowercase">
                builtbytheweekends
              </h2>
            </div>
            <p className="text-text-secondary mb-4">
              project builds, experiments, fast shipping
            </p>
            <span className="text-sm text-accent group-hover:underline">
              view builds →
            </span>
          </Link>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-border my-section"></div>
        
        {/* Recent Activity */}
        <div className="py-section">
          <h2 className="text-2xl font-medium text-text-primary mb-8 lowercase">
            recent activity
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-6 p-6 bg-surface rounded border border-border">
              <div className="text-sm text-text-muted font-mono min-w-[100px]">
                jan 15, 2025
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm bg-accent-muted text-accent px-2 py-1 rounded lowercase">
                    skill challenge
                  </span>
                </div>
                <p className="text-text-secondary">
                  day 6/30 of learning in public challenge · shared progress on habit formation
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 p-6 bg-surface rounded border border-border">
              <div className="text-sm text-text-muted font-mono min-w-[100px]">
                jan 12, 2025
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm bg-accent-muted text-accent px-2 py-1 rounded lowercase">
                    weekend build
                  </span>
                </div>
                <p className="text-text-secondary">
                  prototyped ar navigation app · documented build process and challenges
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 p-6 bg-surface rounded border border-border">
              <div className="text-sm text-text-muted font-mono min-w-[100px]">
                jan 08, 2025
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm bg-accent-muted text-accent px-2 py-1 rounded lowercase">
                    reflection
                  </span>
                </div>
                <p className="text-text-secondary">
                  weekly review: balancing full-time work with personal projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;