import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="py-8 sm:py-content">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-text-primary mb-6 sm:mb-8 lowercase leading-tight">
            content
          </h1>
          
          <p className="text-lg sm:text-xl text-text-secondary font-light mb-12 sm:mb-16 max-w-2xl">
            updates · logs · progress
          </p>
        </div>
        
        {/* Content Channels */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-8 sm:mb-section">
          <Link 
            to="/content/lifeoutsidethecode"
            className="group bg-surface border border-border rounded p-4 sm:p-6 lg:p-8 hover:bg-hover transition-smooth"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl sm:text-2xl">🌱</span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-text-primary lowercase leading-tight">
                lifeoutsidethecode
              </h2>
            </div>
            <p className="text-text-secondary mb-4 text-sm sm:text-base">
              habit/skill challenges, personal growth logs
            </p>
            <span className="text-sm text-accent group-hover:underline">
              view updates →
            </span>
          </Link>
          
          <Link 
            to="/content/builtbytheweekends"
            className="group bg-surface border border-border rounded p-4 sm:p-6 lg:p-8 hover:bg-hover transition-smooth"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl sm:text-2xl">⚡</span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-text-primary lowercase leading-tight">
                builtbytheweekends
              </h2>
            </div>
            <p className="text-text-secondary mb-4 text-sm sm:text-base">
              project builds, experiments, fast shipping
            </p>
            <span className="text-sm text-accent group-hover:underline">
              view builds →
            </span>
          </Link>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-border my-8 sm:my-section"></div>
        
        {/* Recent Activity */}
        <div className="py-8 sm:py-section">
          <h2 className="text-xl sm:text-2xl font-medium text-text-primary mb-6 sm:mb-8 lowercase">
            recent activity
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 p-4 sm:p-6 bg-surface rounded border border-border">
              <div className="text-sm text-text-muted font-mono sm:min-w-[100px] shrink-0 order-2 sm:order-1">
                jan 15, 2025
              </div>
              <div className="order-1 sm:order-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs sm:text-sm bg-accent-muted text-accent px-2 py-1 rounded lowercase">
                    skill challenge
                  </span>
                </div>
                <p className="text-text-secondary text-sm sm:text-base">
                  day 6/30 of learning in public challenge · shared progress on habit formation
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 p-4 sm:p-6 bg-surface rounded border border-border">
              <div className="text-sm text-text-muted font-mono sm:min-w-[100px] shrink-0 order-2 sm:order-1">
                jan 12, 2025
              </div>
              <div className="order-1 sm:order-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs sm:text-sm bg-accent-muted text-accent px-2 py-1 rounded lowercase">
                    weekend build
                  </span>
                </div>
                <p className="text-text-secondary text-sm sm:text-base">
                  prototyped ar navigation app · documented build process and challenges
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 p-4 sm:p-6 bg-surface rounded border border-border">
              <div className="text-sm text-text-muted font-mono sm:min-w-[100px] shrink-0 order-2 sm:order-1">
                jan 08, 2025
              </div>
              <div className="order-1 sm:order-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs sm:text-sm bg-accent-muted text-accent px-2 py-1 rounded lowercase">
                    reflection
                  </span>
                </div>
                <p className="text-text-secondary text-sm sm:text-base">
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