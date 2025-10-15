interface TalentCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const TalentCard = ({ icon, title, description, href }: TalentCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center group"
    >
      <div className="w-24 h-24 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center text-5xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary/80 transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </a>
  );
};

const TalentWidget = () => {
  const cards: TalentCardProps[] = [
    {
      icon: "📚",
      title: "Resources & Tools",
      description: "Access job descriptions, org charts, compensation data, and templates vetted by peer networks to streamline your talent operations.",
      href: "https://my.seminar.community/spaces/21648591/search?term=%23CSGFTalentResourcesTools&sort=relevance&sort_order=desc"
    },
    {
      icon: "💡",
      title: "Insights & Research",
      description: "Explore timely, actionable insights on teacher retention, compensation trends, and innovative talent practices from across the sector.",
      href: "https://my.seminar.community/spaces/21648591/search?term=%23CSGFTalentInsightsResearch&sort=relevance&sort_order=desc"
    },
    {
      icon: "🤝",
      title: "Learning & Community",
      description: "Connect with 1,000+ charter leaders at convenings, webinars, and communities of practice focused on talent excellence.",
      href: "https://my.seminar.community/spaces/21648591/members/all"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <TalentCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalentWidget;
