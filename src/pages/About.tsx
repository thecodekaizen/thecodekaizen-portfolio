const About = () => {
  const timeline = [
    { year: "2016", description: "android apps" },
    { year: "2020", description: "hackathon wins" },
    { year: "2022", description: "software engineer @ idfy" },
    { year: "2024+", description: "indie projects, ar/vr, habit challenges" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="py-content">
          <h1 className="text-5xl md:text-6xl font-light text-text-primary mb-16 lowercase leading-tight">
            about
          </h1>
          
          {/* Bio */}
          <div className="max-w-2xl mb-section">
            <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed mb-8">
              i'm vishnu. i learn, build, and share what i discover along the way. 
              from sports and books to building startups and coding experiments, 
              thecodekaizen is my way of practicing continuous growth.
            </p>
            
            <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed">
              this is not just a portfolio, it's my public lab.
            </p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-border my-section"></div>
        
        {/* Timeline */}
        <div className="py-section">
          <h2 className="text-2xl font-medium text-text-primary mb-12 lowercase">
            timeline
          </h2>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-8">
                <div className="text-lg font-medium text-accent min-w-[80px]">
                  {item.year}
                </div>
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="text-lg text-text-secondary lowercase">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-border my-section"></div>
        
        {/* Current Focus */}
        <div className="py-section">
          <h2 className="text-2xl font-medium text-text-primary mb-8 lowercase">
            current focus
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface p-6 rounded border border-border">
              <h3 className="text-lg font-medium text-text-primary mb-3 lowercase">
                learning
              </h3>
              <p className="text-text-secondary">
                30-day skill challenges · public documentation · continuous improvement mindset
              </p>
            </div>
            
            <div className="bg-surface p-6 rounded border border-border">
              <h3 className="text-lg font-medium text-text-primary mb-3 lowercase">
                building
              </h3>
              <p className="text-text-secondary">
                weekend projects · ar/vr experiments · tools for personal productivity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;