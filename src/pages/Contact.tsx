const Contact = () => {
  const links = [
    { platform: "linkedin", url: "https://linkedin.com/in/vishnu" },
    { platform: "twitter/x", url: "https://twitter.com/vishnuthecoder" },
    { platform: "github", url: "https://github.com/vishnu" },
    { platform: "email", url: "mailto:hello@thecodekaizen.com" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="py-content">
          <h1 className="text-5xl md:text-6xl font-light text-text-primary mb-8 lowercase leading-tight">
            contact
          </h1>
          
          <p className="text-xl text-text-secondary font-light mb-16 max-w-2xl">
            let's connect, collaborate, or just say hi.
          </p>
        </div>
        
        {/* Contact Links */}
        <div className="grid md:grid-cols-2 gap-6 mb-section max-w-2xl">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface border border-border rounded p-6 hover:bg-hover transition-smooth"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg text-text-primary lowercase group-hover:text-accent transition-smooth">
                  {link.platform}
                </span>
                <span className="text-text-muted text-sm group-hover:text-accent transition-smooth">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-border my-section"></div>
        
        {/* Collaboration */}
        <div className="py-section">
          <h2 className="text-2xl font-medium text-text-primary mb-8 lowercase">
            open to
          </h2>
          
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2 lowercase">
                  weekend project collaborations
                </h3>
                <p className="text-text-secondary">
                  building mvps, exploring new tech, or just having fun with code
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2 lowercase">
                  mentorship exchanges
                </h3>
                <p className="text-text-secondary">
                  sharing knowledge, learning from others, growing together
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
              <div>
                <h3 className="text-lg font-medium text-text-primary mb-2 lowercase">
                  casual conversations
                </h3>
                <p className="text-text-secondary">
                  about tech, productivity, habits, or anything interesting
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Note */}
        <div className="py-section">
          <div className="bg-accent-muted p-6 rounded border border-accent">
            <p className="text-accent text-sm">
              <strong>note:</strong> i try to respond within 24-48 hours. if you don't hear back, 
              feel free to follow up — sometimes messages get lost in the digital void.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;