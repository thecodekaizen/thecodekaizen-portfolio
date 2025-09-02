const Projects = () => {
  const projects = [
    {
      title: "habit tracker pro",
      description: "minimalist tracking for 30-day challenges",
      status: "shipped",
      type: "tool",
      tech: ["react", "typescript", "tailwind"]
    },
    {
      title: "ar navigation prototype",
      description: "exploring spatial computing for wayfinding",
      status: "in progress",
      type: "experiment",
      tech: ["ar.js", "three.js", "javascript"]
    },
    {
      title: "weekend build template",
      description: "rapid prototyping setup for quick ideas",
      status: "shipped",
      type: "tool",
      tech: ["vite", "react", "shadcn/ui"]
    },
    {
      title: "learning automation",
      description: "ai-powered study session optimizer",
      status: "failed",
      type: "startup idea",
      tech: ["python", "openai api", "streamlit"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "shipped":
        return "bg-accent text-text-inverse";
      case "in progress":
        return "bg-surface border border-accent text-accent";
      case "failed":
        return "bg-surface border border-text-muted text-text-muted";
      default:
        return "bg-surface border border-border text-text-secondary";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "tool":
        return "🛠️";
      case "experiment":
        return "🧪";
      case "startup idea":
        return "💡";
      default:
        return "📦";
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="py-content">
          <h1 className="text-5xl md:text-6xl font-light text-text-primary mb-8 lowercase leading-tight">
            projects
          </h1>
          
          <p className="text-xl text-text-secondary font-light mb-16 max-w-2xl">
            a collection of builds, experiments, and lessons learned
          </p>
        </div>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-section">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-surface border border-border rounded p-6 hover:bg-hover transition-smooth cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{getTypeIcon(project.type)}</span>
                <span className={`text-xs px-2 py-1 rounded lowercase ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-lg font-medium text-text-primary mb-2 lowercase group-hover:text-accent transition-smooth">
                {project.title}
              </h3>
              
              <p className="text-text-secondary mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs text-text-muted bg-background px-2 py-1 rounded border border-border lowercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-border my-section"></div>
        
        {/* Build Philosophy */}
        <div className="py-section">
          <h2 className="text-2xl font-medium text-text-primary mb-8 lowercase">
            build philosophy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-medium text-text-primary mb-3 lowercase">
                ship fast
              </h3>
              <p className="text-text-secondary text-sm">
                perfect is the enemy of good. get it out there, then iterate.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-medium text-text-primary mb-3 lowercase">
                learn publicly
              </h3>
              <p className="text-text-secondary text-sm">
                document the process, share the failures, celebrate the wins.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg font-medium text-text-primary mb-3 lowercase">
                embrace kaizen
              </h3>
              <p className="text-text-secondary text-sm">
                small, continuous improvements over massive overhauls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;